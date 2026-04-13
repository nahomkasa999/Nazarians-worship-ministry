"use client";

import type { JSONContent } from "@tiptap/core";
import { EditorContent, useEditor } from "@tiptap/react";
import {
  Bold,
  Heading2,
  Heading3,
  ImageIcon,
  Italic,
  Link2,
  List,
  ListOrdered,
  Minus,
  Quote,
} from "lucide-react";
import { useCallback, useEffect, useRef } from "react";
import { BLOG_EMPTY_DOC } from "@/lib/blog/default-content";
import { getBlogEditorExtensions } from "@/lib/blog/tiptap-extensions";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function normalizeContent(raw: unknown): JSONContent {
  if (raw && typeof raw === "object" && "type" in raw && (raw as { type: string }).type === "doc") {
    return raw as JSONContent;
  }
  return BLOG_EMPTY_DOC;
}

type BlogRichTextEditorProps = {
  content: unknown;
  onChange: (json: JSONContent) => void;
  onUploadImage: (file: File) => Promise<string | null>;
  disabled?: boolean;
};

export function BlogRichTextEditor({
  content,
  onChange,
  onUploadImage,
  disabled = false,
}: BlogRichTextEditorProps) {
  const fileRef = useRef<HTMLInputElement>(null);
  const onChangeRef = useRef(onChange);
  onChangeRef.current = onChange;

  const editor = useEditor({
    extensions: getBlogEditorExtensions({
      mode: "edit",
      placeholder: "Write your post…",
    }),
    editable: !disabled,
    immediatelyRender: false,
    content: normalizeContent(content),
    editorProps: {
      attributes: {
        class: "blog-prose__editor-inner",
      },
    },
    onUpdate: ({ editor: ed }) => {
      onChangeRef.current(ed.getJSON());
    },
  });

  useEffect(() => {
    if (!editor) return;
    editor.setEditable(!disabled);
  }, [editor, disabled]);

  useEffect(() => {
    if (!editor) return;
    const next = normalizeContent(content);
    const current = editor.getJSON();
    if (JSON.stringify(current) === JSON.stringify(next)) return;
    editor.commands.setContent(next, { emitUpdate: false });
  }, [editor, content]);

  const setLink = useCallback(() => {
    if (!editor) return;
    const prev = editor.getAttributes("link").href as string | undefined;
    const url = window.prompt("Link URL", prev ?? "https://");
    if (url === null) return;
    if (url === "") {
      editor.chain().focus().extendMarkRange("link").unsetLink().run();
      return;
    }
    editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
  }, [editor]);

  const onPickImage = useCallback(async () => {
    if (!editor || disabled) return;
    fileRef.current?.click();
  }, [editor, disabled]);

  const onFileChange = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      e.target.value = "";
      if (!file || !editor) return;
      const url = await onUploadImage(file);
      if (url) {
        editor.chain().focus().setImage({ src: url }).run();
      }
    },
    [editor, onUploadImage]
  );

  if (!editor) {
    return null;
  }

  return (
    <div className="space-y-2">
      <input
        ref={fileRef}
        type="file"
        accept="image/jpeg,image/png,image/webp"
        className="hidden"
        onChange={onFileChange}
      />
      <div className="flex flex-wrap gap-1 border border-border bg-muted/30 p-1">
        <Button
          type="button"
          variant={editor.isActive("bold") ? "secondary" : "ghost"}
          size="sm"
          className="h-8 px-2"
          disabled={disabled}
          onClick={() => editor.chain().focus().toggleBold().run()}
        >
          <Bold className="size-4" />
        </Button>
        <Button
          type="button"
          variant={editor.isActive("italic") ? "secondary" : "ghost"}
          size="sm"
          className="h-8 px-2"
          disabled={disabled}
          onClick={() => editor.chain().focus().toggleItalic().run()}
        >
          <Italic className="size-4" />
        </Button>
        <Button
          type="button"
          variant={editor.isActive("heading", { level: 2 }) ? "secondary" : "ghost"}
          size="sm"
          className="h-8 px-2"
          disabled={disabled}
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        >
          <Heading2 className="size-4" />
        </Button>
        <Button
          type="button"
          variant={editor.isActive("heading", { level: 3 }) ? "secondary" : "ghost"}
          size="sm"
          className="h-8 px-2"
          disabled={disabled}
          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        >
          <Heading3 className="size-4" />
        </Button>
        <Button
          type="button"
          variant={editor.isActive("bulletList") ? "secondary" : "ghost"}
          size="sm"
          className="h-8 px-2"
          disabled={disabled}
          onClick={() => editor.chain().focus().toggleBulletList().run()}
        >
          <List className="size-4" />
        </Button>
        <Button
          type="button"
          variant={editor.isActive("orderedList") ? "secondary" : "ghost"}
          size="sm"
          className="h-8 px-2"
          disabled={disabled}
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
        >
          <ListOrdered className="size-4" />
        </Button>
        <Button
          type="button"
          variant={editor.isActive("blockquote") ? "secondary" : "ghost"}
          size="sm"
          className="h-8 px-2"
          disabled={disabled}
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
        >
          <Quote className="size-4" />
        </Button>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          className="h-8 px-2"
          disabled={disabled}
          onClick={() => editor.chain().focus().setHorizontalRule().run()}
        >
          <Minus className="size-4" />
        </Button>
        <Button type="button" variant="ghost" size="sm" className="h-8 px-2" disabled={disabled} onClick={setLink}>
          <Link2 className="size-4" />
        </Button>
        <Button type="button" variant="ghost" size="sm" className="h-8 px-2" disabled={disabled} onClick={onPickImage}>
          <ImageIcon className="size-4" />
        </Button>
      </div>
      <div className={cn("blog-prose blog-prose--editor")}>
        <EditorContent editor={editor} />
      </div>
    </div>
  );
}
