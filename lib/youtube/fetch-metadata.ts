import {
  canonicalWatchUrl,
  fallbackThumbnailUrl,
  parseYoutubeVideoId,
} from "@/lib/youtube/parse-id";
import { parseIso8601Duration } from "@/lib/youtube/duration";

export type YoutubeVideoMetadata = {
  youtubeId: string;
  title: string;
  description: string | null;
  thumbnailUrl: string;
  durationSeconds: number | null;
};

/** Server-only. Supports common naming mistakes in .env */
export function getYoutubeDataApiKey(): string | undefined {
  const a = process.env.YOUTUBE_DATA_API_KEY?.trim();
  if (a) return a;
  const b = process.env.YOUTUBE_API_KEY?.trim();
  if (b) return b;
  const c = process.env.GOOGLE_API_KEY?.trim();
  if (c) return c;
  return undefined;
}

function pickBestThumbnail(thumbnails: Record<string, { url?: string } | undefined>): string | null {
  const order = ["maxres", "standard", "high", "medium", "default"] as const;
  for (const k of order) {
    const u = thumbnails[k]?.url;
    if (u) return u;
  }
  return null;
}

/**
 * Public oEmbed endpoint — no Google API key. Returns title + thumbnail only (no duration/description).
 */
async function fetchYoutubeOEmbed(watchUrl: string, videoId: string): Promise<{
  title: string;
  thumbnailUrl: string;
} | null> {
  const oembed = new URL("https://www.youtube.com/oembed");
  oembed.searchParams.set("url", watchUrl);
  oembed.searchParams.set("format", "json");

  try {
    const res = await fetch(oembed.toString(), {
      next: { revalidate: 3600 },
      headers: { Accept: "application/json" },
    });
    if (!res.ok) return null;
    const j = (await res.json()) as { title?: string; thumbnail_url?: string };
    const title = j.title?.trim();
    if (!title) return null;
    const thumb = j.thumbnail_url?.trim();
    return {
      title,
      thumbnailUrl: thumb || fallbackThumbnailUrl(videoId),
    };
  } catch {
    return null;
  }
}

async function fetchViaDataApi(
  id: string,
  key: string
): Promise<
  | { ok: true; data: YoutubeVideoMetadata }
  | { ok: false; reason: string }
> {
  const url = new URL("https://www.googleapis.com/youtube/v3/videos");
  url.searchParams.set("part", "snippet,contentDetails");
  url.searchParams.set("id", id);
  url.searchParams.set("key", key);

  let res: Response;
  try {
    res = await fetch(url.toString(), { next: { revalidate: 0 } });
  } catch {
    return { ok: false, reason: "Network error while contacting YouTube Data API." };
  }

  if (!res.ok) {
    const text = await res.text();
    return {
      ok: false,
      reason: `YouTube Data API HTTP ${res.status}. ${text.slice(0, 180)}`,
    };
  }

  type ApiItem = {
    id: string;
    snippet?: {
      title?: string;
      description?: string;
      thumbnails?: Record<string, { url?: string }>;
    };
    contentDetails?: { duration?: string };
  };

  const json = (await res.json()) as { items?: ApiItem[]; error?: { message?: string } };
  if (json.error?.message) {
    return { ok: false, reason: json.error.message };
  }

  const item = json.items?.[0];
  if (!item?.snippet) {
    return {
      ok: false,
      reason:
        "Data API returned no video (check API key restrictions, quota, or that YouTube Data API v3 is enabled for this key).",
    };
  }

  const thumb =
    pickBestThumbnail(item.snippet.thumbnails ?? {}) ?? fallbackThumbnailUrl(id);
  const durationRaw = item.contentDetails?.duration;
  const durationSeconds = durationRaw ? parseIso8601Duration(durationRaw) : null;

  return {
    ok: true,
    data: {
      youtubeId: id,
      title: item.snippet.title?.trim() || "Untitled",
      description: item.snippet.description?.trim() || null,
      thumbnailUrl: thumb,
      durationSeconds,
    },
  };
}

export async function fetchYoutubeVideoMetadata(
  youtubeUrlOrId: string
): Promise<{ ok: true; data: YoutubeVideoMetadata } | { ok: false; message: string }> {
  const id = parseYoutubeVideoId(youtubeUrlOrId);
  if (!id) {
    return { ok: false, message: "Could not read a valid YouTube video ID from that link." };
  }

  const watchUrl = canonicalWatchUrl(id);
  const key = getYoutubeDataApiKey();

  if (key) {
    const api = await fetchViaDataApi(id, key);
    if (api.ok) {
      return api;
    }
    if (process.env.NODE_ENV === "development") {
      console.warn("[youtube] Data API failed, using oEmbed fallback:", api.reason);
    }
  }

  const oembed = await fetchYoutubeOEmbed(watchUrl, id);
  if (oembed) {
    return {
      ok: true,
      data: {
        youtubeId: id,
        title: oembed.title,
        description: null,
        thumbnailUrl: oembed.thumbnailUrl,
        durationSeconds: null,
      },
    };
  }

  return {
    ok: true,
    data: {
      youtubeId: id,
      title: "",
      description: null,
      thumbnailUrl: fallbackThumbnailUrl(id),
      durationSeconds: null,
    },
  };
}
