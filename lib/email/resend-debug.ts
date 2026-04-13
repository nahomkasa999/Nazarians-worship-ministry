/** Safe for logs — never print full API keys. */
export function maskResendApiKeyForLog(key: string | undefined): string {
  if (!key?.trim()) return "(not set)";
  const k = key.trim();
  if (k.length <= 10) return "***";
  return `${k.slice(0, 4)}…${k.slice(-4)} (${k.length} chars)`;
}
