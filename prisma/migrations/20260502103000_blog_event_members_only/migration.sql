-- Blog: members-only flag (hidden from public listings / gated on detail page)
ALTER TABLE "blogs"
ADD COLUMN IF NOT EXISTS "membersOnly" BOOLEAN NOT NULL DEFAULT false;

CREATE INDEX IF NOT EXISTS "blogs_membersOnly_status_publishedAt_idx"
ON "blogs"("membersOnly", "status", "publishedAt");

-- Event: members-only flag (hidden from home events strip / gated where applicable)
ALTER TABLE "events"
ADD COLUMN IF NOT EXISTS "membersOnly" BOOLEAN NOT NULL DEFAULT false;

CREATE INDEX IF NOT EXISTS "events_membersOnly_active_position_idx"
ON "events"("membersOnly", "active", "position");
