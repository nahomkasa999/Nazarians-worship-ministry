/** Parse YouTube contentDetails.duration ISO 8601 (e.g. PT1H2M3S, PT5M, PT45S) to seconds. */
export function parseIso8601Duration(iso: string): number | null {
  const m = /^PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?$/.exec(iso);
  if (!m) return null;
  const h = parseInt(m[1] ?? "0", 10) || 0;
  const min = parseInt(m[2] ?? "0", 10) || 0;
  const s = parseInt(m[3] ?? "0", 10) || 0;
  return h * 3600 + min * 60 + s;
}

export function formatDurationSeconds(total: number): string {
  if (!Number.isFinite(total) || total < 0) return "";
  const h = Math.floor(total / 3600);
  const m = Math.floor((total % 3600) / 60);
  const s = total % 60;
  if (h > 0) {
    return `${h}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  }
  return `${m}:${String(s).padStart(2, "0")}`;
}
