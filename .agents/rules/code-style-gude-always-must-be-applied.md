---
trigger: always_on
---

# RULES.md — Nazarian Worship Ministry
# Next.js 15 (App Router) · TypeScript · Tailwind CSS v4 · shadcn/ui · Supabase

This file is the single source of truth for how this codebase is structured,
named, and written. Every AI agent, contributor, and future session must read
and follow these rules before touching any file.

---

## 1. Stack

| Layer | Tool | Version |
|---|---|---|
| Framework | Next.js App Router | 15.x |
| Language | TypeScript | 5.x (strict) |
| Styling | Tailwind CSS | v4 |
| Component primitives | shadcn/ui | latest |
| Database / Auth | Supabase | latest |
| ORM | Prisma | latest |
| Auth library | Better Auth | latest |
| Forms | React Hook Form + Zod | latest |
| HTTP client | Better Fetch | latest |
| Package manager | Bun | latest |

Tailwind v4 uses a CSS-first config (`@import "tailwindcss"` in globals.css,
no `tailwind.config.ts` file unless explicitly needed for plugins).

---

## 2. Folder Structure

```
church/
├── app/                          # Next.js App Router
│   ├── layout.tsx                # Root layout — fonts, providers, metadata
│   ├── page.tsx                  # Home route — composes sections only
│   ├── globals.css               # Design tokens + Tailwind base
│   ├── favicon.ico
│   │
│   ├── (marketing)/              # Route group — public pages
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── events/
│   │   │   └── page.tsx
│   │   ├── blog/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/
│   │   │       └── page.tsx
│   │   └── courses/
│   │       ├── page.tsx
│   │       └── [slug]/
│   │           └── page.tsx
│   │
│   ├── (auth)/                   # Route group — auth pages
│   │   ├── login/
│   │   │   └── page.tsx
│   │   └── register/
│   │       └── page.tsx
│   │
│   ├── dashboard/                # Protected — member area
│   │   ├── layout.tsx
│   │   └── page.tsx
│   │
│   └── api/                      # API routes
│       ├── auth/
│       │   └── [...betterauth]/
│       │       └── route.ts
│       └── webhooks/
│           └── route.ts
│
├── components/                   # All React components
│   ├── ui/                       # shadcn/ui primitives (auto-generated, do not edit)
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── dialog.tsx
│   │   └── ...
│   │
│   ├── layout/                   # App-wide structural components
│   │   ├── nav.tsx
│   │   ├── footer.tsx
│   │   └── section-header.tsx
│   │
│   ├── sections/                 # Full page sections (composed from blocks)
│   │   ├── hero-section.tsx
│   │   ├── mission-section.tsx
│   │   ├── teaching-section.tsx
│   │   ├── blogs-section.tsx
│   │   ├── events-section.tsx
│   │   └── join-section.tsx
│   │
│   ├── blocks/                   # Reusable UI blocks (not full sections)
│   │   ├── teaching-card.tsx
│   │   ├── blog-row.tsx
│   │   ├── event-card.tsx
│   │   └── pagination.tsx
│   │
│   └── common/                   # Tiny shared atoms (not shadcn)
│       ├── divider.tsx
│       ├── social-icon.tsx
│       └── section-label.tsx
│
├── content/                      # All hard-coded UI data — never inline
│   ├── nav.ts                    # Nav links array
│   ├── teachings.ts              # Teaching cards data
│   ├── blogs.ts                  # Blog rows data
│   ├── events.ts                 # Event cards data
│   └── footer.ts                 # Footer links columns
│
├── lib/                          # Utilities and integrations
│   ├── supabase/
│   │   ├── client.ts             # Browser client
│   │   └── server.ts             # Server client (cookies)
│   ├── auth.ts                   # Better Auth instance
│   ├── prisma.ts                 # Prisma client singleton
│   ├── validations/              # Zod schemas
│   │   ├── auth.ts
│   │   └── contact.ts
│   └── utils.ts                  # cn() and other helpers
│
├── hooks/                        # Custom React hooks
│   └── use-carousel.ts
│
├── types/                        # Global TypeScript types
│   ├── database.ts               # Supabase generated types
│   └── index.ts                  # Shared app types
│
├── public/                       # Static assets
│   └── images/
│       ├── hero.jpg
│       └── ...
│
├── prisma/
│   └── schema.prisma
│
├── .env.local                    # Environment variables (never commit)
├── next.config.ts
├── tsconfig.json
├── postcss.config.mjs
├── components.json               # shadcn/ui config
└── RULES.md                      # This file
```

## 3. File Naming Rules

| What | Convention | Example |
|---|---|---|
| Components | kebab-case | `teaching-card.tsx` |
| Pages | always `page.tsx` | `app/blog/page.tsx` |
| Layouts | always `layout.tsx` | `app/dashboard/layout.tsx` |
| Content files | kebab-case | `content/teachings.ts` |
| Hooks | `use-` prefix | `hooks/use-carousel.ts` |
| Types | kebab-case | `types/database.ts` |
| Lib utilities | kebab-case | `lib/utils.ts` |
| Route groups | parentheses | `(marketing)/` |

**Never** use PascalCase for file names. PascalCase is only for the exported
React component or TypeScript type *inside* the file, not the file name itself.

---

## 4. Component Rules

### 4.1 Component hierarchy

```
page.tsx
  └── sections/           ← full-width page sections
        └── blocks/       ← cards, rows, repeated UI units
              └── ui/     ← shadcn primitives
              └── common/ ← atoms (divider, label, icon)
```

A `section` file imports `blocks`. A `block` file imports `ui` and `common`.
Pages import `sections` and `layout` components only. Never skip levels.

### 4.2 Every component must

- Be a named export AND a default export.
- Accept only typed props — no `any`.
- Use `cn()` from `lib/utils.ts` for className merging.
- Never contain hard-coded copy, numbers, or image URLs. Those go in `content/`.

### 4.3 "use client" rule

Add `"use client"` only when the component uses:
- `useState`, `useEffect`, `useRef`, or other React hooks with side effects
- Browser APIs
- Event handlers (onClick, onChange, etc.) that require interactivity

Server Components are the default. Sections that are purely presentational
stay as Server Components. Only the interactive pieces (carousel, form, nav
mobile menu) get `"use client"`.

---

## 5. Styling Rules

### 5.1 Tailwind CSS v4

- All styles are written as Tailwind utility classes on the JSX element.
- No separate `.css` files per component. No `style={{}}` inline styles.
- `globals.css` is the only CSS file (besides shadcn overrides). It contains:
  - `@import "tailwindcss"`
  - CSS custom properties (design tokens)
  - Base resets
  - `@layer base` typography defaults

### 5.2 Custom values

Use CSS variables defined in `globals.css` and reference them via Tailwind's
arbitrary value syntax: `text-[var(--color-black)]`, `bg-[var(--color-bg)]`.

Do not hardcode hex values in JSX. Every color used more than once must be a
CSS variable.

### 5.3 Class merging

Always use `cn()` when combining conditional classes:

```tsx
// lib/utils.ts
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

### 5.4 Responsive

Mobile-first. Use `sm:`, `md:`, `lg:`, `xl:` prefixes. Never use px breakpoints
in JSX — always use Tailwind's breakpoint prefixes.

---

## 6. shadcn/ui Rules

shadcn is the **mandatory** component primitive layer. Do not build custom
button, card, dialog, input, badge, or sheet components from scratch.

### 6.1 Install components via CLI only

```bash
bunx shadcn@latest add button
bunx shadcn@latest add card
bunx shadcn@latest add dialog
```

Generated files land in `components/ui/`. **Never edit them directly.**
Extend by wrapping, not modifying:

```tsx
// components/blocks/ministry-button.tsx
import { Button, type ButtonProps } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface MinistryButtonProps extends ButtonProps {
  variant?: "primary" | "secondary" | "outline"
}

export function MinistryButton({ variant = "primary", className, ...props }: MinistryButtonProps) {
  return (
    <Button
      className={cn(
        "font-inter font-bold text-2xl uppercase tracking-normal rounded-none px-10 py-5 border-2 transition-colors duration-[80ms] [transition-timing-function:steps(1)]",
        variant === "primary" && "bg-[var(--color-black)] text-white border-[var(--color-black)] hover:bg-white hover:text-[var(--color-black)] active:translate-y-0.5 active:scale-[0.985]",
        variant === "secondary" && "bg-white text-[var(--color-black)] border-[var(--color-black)] hover:bg-[var(--color-black)] hover:text-white active:translate-y-0.5 active:scale-[0.985]",
        variant === "outline" && "bg-white text-[var(--color-black)] border-[var(--color-btn-border)] hover:bg-[var(--color-black)] hover:text-white hover:border-[var(--color-black)] active:translate-y-0.5",
        className
      )}
      {...props}
    />
  )
}
```

### 6.2 Required shadcn components for this project

Install all of these before building:

```bash
bunx shadcn@latest add button card badge dialog sheet input textarea
```

### 6.3 components.json

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "default",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "",
    "css": "app/globals.css",
    "baseColor": "neutral",
    "cssVariables": true
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  }
}
```

---

## 7. Content / Data Rules

Hard-coded UI data never lives in a component file. It lives in `content/`.

### 7.1 Example — content/teachings.ts

```ts
export type Teaching = {
  id: string
  image: string
  title: string
  semester: string
  meeting: string
  location: string
  description: string
}

export const teachings: Teaching[] = [
  {
    id: "foundations-of-faith",
    image: "/images/teaching-foundations.jpg",
    title: "FOUNDATIONS OF THE FAITH",
    semester: "Semesters: October – December 2025",
    meeting: "MEETING: Every Tuesday",
    location: "Location: Nazarian Training Center",
    description:
      "A deep-dive modular study into core Christian doctrine (Systemic Theology). Ideal for those looking to articulate the reasons for our hope. Bilingual (Amharic/English) materials provided.",
  },
  // ...
]
```

### 7.2 Example — content/nav.ts

```ts
export type NavLink = {
  label: string
  href: string
}

export const navLinks: NavLink[] = [
  { label: "About Us", href: "/about" },
  { label: "Events",   href: "/events" },
  { label: "Connect",  href: "/connect" },
  { label: "Blog",     href: "/blog" },
  { label: "Courses",  href: "/courses" },
]
```

### 7.3 Example — content/footer.ts

```ts
export type FooterColumn = {
  title: string
  links: { label: string; href: string }[]
}

export const footerColumns: FooterColumn[] = [
  {
    title: "NAVIGATION",
    links: [
      { label: "HOME",   href: "/" },
      { label: "ABOUT",  href: "/about" },
      { label: "EVENTS", href: "/events" },
      { label: "BLOG",   href: "/blog" },
    ],
  },
  // ...
]
```

Then in the component:

```tsx
// components/layout/footer.tsx
import { footerColumns } from "@/content/footer"

export function Footer() {
  return (
    <footer>
      {footerColumns.map((col) => (
        <div key={col.title}>
          <p>{col.title}</p>
          {col.links.map((link) => (
            <a key={link.href} href={link.href}>{link.label}</a>
          ))}
        </div>
      ))}
    </footer>
  )
}
```

---

## 8. API Route Rules

All API routes live in `app/api/`. Route handlers use the Next.js 15 format:

```ts
// app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server"
import { z } from "zod"

const schema = z.object({
  name:    z.string().min(1),
  email:   z.string().email(),
  message: z.string().min(10),
})

export async function POST(req: NextRequest) 
---