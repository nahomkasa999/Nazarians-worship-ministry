import type { Extensions } from "@tiptap/core";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import Placeholder from "@tiptap/extension-placeholder";
import Typography from "@tiptap/extension-typography";
import StarterKit from "@tiptap/starter-kit";

export type BlogEditorMode = "edit" | "view";

export function getBlogEditorExtensions(options?: {
  mode?: BlogEditorMode;
  placeholder?: string;
}): Extensions {
  const mode = options?.mode ?? "edit";
  const extensions: Extensions = [
    StarterKit.configure({
      heading: { levels: [1, 2, 3] },
    }),
    Link.configure({
      openOnClick: mode === "view",
      autolink: true,
      HTMLAttributes: { class: "blog-prose__link" },
    }),
    Image.configure({
      HTMLAttributes: { class: "blog-prose__img" },
    }),
    Typography,
  ];

  if (options?.placeholder) {
    extensions.push(
      Placeholder.configure({
        placeholder: options.placeholder,
      })
    );
  }

  return extensions;
}
