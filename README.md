# Nazarians Worship Ministry

A website for the Nazarians worship ministry, with teaching, blog posts, events, and a way to join — plus sign-in and a content editor for managing the site's content.

> The ministry's location, service times, and live link are not recorded in the repo — add them here before sharing this README publicly.

## What it does

Home page sections:

- Hero and Mission
- Teaching
- Blog
- Events
- Join

Behind the scenes (from the code):

- Sign-in with Better Auth, backed by Prisma and Supabase (Postgres).
- A rich-text editor (Tiptap) for teaching and blog content.
- Email via Resend (and Nodemailer), with a test script: `bun run scripts/test-resend-email.ts`.

## Stack

- Next.js 16 / React 19 / TypeScript
- Prisma 7 + Supabase (Postgres)
- Better Auth
- Tiptap (rich-text editing)
- Resend + Nodemailer (email)
- Tailwind CSS 4, Radix UI, shadcn/ui

## Run it

```bash
npm install
npm run dev
```

The `dev` script runs `next dev` (with `NODE_OPTIONS=--dns-result-order=ipv4first`). Other scripts (from `package.json`):

```bash
npm run build
npm run start
npm run lint
npm run test:email   # bun run scripts/test-resend-email.ts
```

You can also run it with Bun: `npm run dev:bun`.

## Setup

Set up the database first — the `postinstall` script runs `prisma generate`. You will need the database and auth/email environment variables the app expects.

## Structure

- `app/page.tsx` — home page (Hero, Mission, Teaching, Blog, Events, Join sections)
- `app/` — routes, including auth and content pages
- `components/` — layout, sections, and UI components
- `prisma/` — database schema
