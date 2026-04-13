-- AlterTable
ALTER TABLE "teachings" ADD COLUMN IF NOT EXISTS "slug" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX IF NOT EXISTS "teachings_slug_key" ON "teachings"("slug");

-- Backfill existing rows with deterministic unique slugs.
UPDATE "teachings"
SET "slug" = CONCAT('teaching-', "id")
WHERE "slug" IS NULL;
