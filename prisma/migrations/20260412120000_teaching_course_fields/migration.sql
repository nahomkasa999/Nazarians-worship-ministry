-- AlterTable
ALTER TABLE "teachings" ADD COLUMN IF NOT EXISTS "durationSeconds" INTEGER;
ALTER TABLE "teachings" ADD COLUMN IF NOT EXISTS "semesterLabel" TEXT;
ALTER TABLE "teachings" ADD COLUMN IF NOT EXISTS "scheduleLine" TEXT;
ALTER TABLE "teachings" ADD COLUMN IF NOT EXISTS "venueLine" TEXT;
