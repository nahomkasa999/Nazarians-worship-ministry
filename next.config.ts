import type { NextConfig } from "next";
import type { RemotePattern } from "next/dist/shared/lib/image-config";

function supabaseStorageRemotePatterns(): RemotePattern[] {
  const raw = process.env.NEXT_PUBLIC_SUPABASE_URL;
  if (!raw) return [];
  try {
    const url = new URL(raw);
    const protocol: RemotePattern["protocol"] = url.protocol === "https:" ? "https" : "http";
    return [
      {
        protocol,
        hostname: url.hostname,
        pathname: "/storage/v1/object/public/**",
      },
    ];
  } catch {
    return [];
  }
}

const youtubeThumbnailPatterns: RemotePattern[] = [
  { protocol: "https", hostname: "i.ytimg.com", pathname: "/**" },
  { protocol: "https", hostname: "img.youtube.com", pathname: "/**" },
  { protocol: "https", hostname: "yt3.googleusercontent.com", pathname: "/**" },
];

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [...supabaseStorageRemotePatterns(), ...youtubeThumbnailPatterns],
  },
};

export default nextConfig;
