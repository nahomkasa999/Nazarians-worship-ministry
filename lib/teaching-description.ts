import type { JSONContent } from "@tiptap/core";

function walkText(node: unknown, out: string[]) {
  if (!node || typeof node !== "object") return;
  const typed = node as { text?: unknown; content?: unknown };
  if (typeof typed.text === "string") {
    out.push(typed.text);
  }
  if (Array.isArray(typed.content)) {
    for (const child of typed.content) {
      walkText(child, out);
    }
  }
}

export function parseTeachingDescription(value: string | null | undefined): JSONContent | null {
  if (!value) return null;
  try {
    const parsed = JSON.parse(value);
    if (parsed && typeof parsed === "object" && (parsed as { type?: string }).type === "doc") {
      return parsed as JSONContent;
    }
    return null;
  } catch {
    return null;
  }
}

export function toTeachingDescriptionStorage(content: JSONContent): string | null {
  const json = JSON.stringify(content);
  return json === '{"type":"doc","content":[{"type":"paragraph"}]}' ? null : json;
}

export function teachingDescriptionPreview(value: string | null | undefined): string {
  if (!value) return "";
  const doc = parseTeachingDescription(value);
  if (!doc) return value;
  const out: string[] = [];
  walkText(doc, out);
  return out.join(" ").replace(/\s+/g, " ").trim();
}
