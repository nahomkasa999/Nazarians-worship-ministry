"use client";

import { EditorContent, useEditor } from "@tiptap/react";
import { useEffect } from "react";
import type { JSONContent } from "@tiptap/core";
import { BLOG_EMPTY_DOC } from "@/lib/blog/default-content";
import { getBlogEditorExtensions } from "@/lib/blog/tiptap-extensions";
import { cn } from "@/lib/utils";

function normalizeContent(raw: unknown): JSONContent {
  if (raw && typeof raw === "object" && "type" in raw && (raw as { type: string }).type === "doc") {
    return raw as JSONContent;
  }
  return BLOG_EMPTY_DOC;
}

export function BlogRichTextViewer({
  content,
  className,
}: {
  content: unknown;
  className?: string;
}) {
  const doc = normalizeContent(content);

  const editor = useEditor({
    extensions: getBlogEditorExtensions({ mode: "view" }),
    editable: false,
    immediatelyRender: false,
    content: doc,
    editorProps: {
      attributes: {
        class: cn("blog-prose__editor-inner", className),
      },
    },
  });

  useEffect(() => {
    if (!editor) return;
    editor.commands.setContent(normalizeContent(content), { emitUpdate: false });
  }, [editor, content]);

  if (!editor) {
    return null;
  }

  return (
    <div className="blog-prose">
      <EditorContent editor={editor} />
    </div>
  );
}
