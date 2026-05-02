-- Teaching: members-only flag
ALTER TABLE "teachings"
ADD COLUMN IF NOT EXISTS "membersOnly" BOOLEAN NOT NULL DEFAULT false;

CREATE INDEX IF NOT EXISTS "teachings_membersOnly_published_position_idx"
ON "teachings"("membersOnly", "published", "position");

-- Teaching attachments (PDFs)
CREATE TABLE IF NOT EXISTS "teaching_attachments" (
  "id" TEXT NOT NULL,
  "teachingId" TEXT NOT NULL,
  "title" TEXT,
  "storagePath" TEXT NOT NULL,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,

  CONSTRAINT "teaching_attachments_pkey" PRIMARY KEY ("id")
);

CREATE INDEX IF NOT EXISTS "teaching_attachments_teachingId_createdAt_idx"
ON "teaching_attachments"("teachingId", "createdAt");

ALTER TABLE "teaching_attachments"
ADD CONSTRAINT "teaching_attachments_teachingId_fkey"
FOREIGN KEY ("teachingId") REFERENCES "teachings"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- Membership: subscription-style fields + payment method + rejection reason + link to user
ALTER TABLE "membership_requests"
ADD COLUMN IF NOT EXISTS "userId" TEXT,
ADD COLUMN IF NOT EXISTS "paymentMethod" TEXT,
ADD COLUMN IF NOT EXISTS "rejectionReason" TEXT,
ADD COLUMN IF NOT EXISTS "membershipStartsAt" TIMESTAMP(3),
ADD COLUMN IF NOT EXISTS "membershipExpiresAt" TIMESTAMP(3),
ADD COLUMN IF NOT EXISTS "renewedFromId" TEXT;

CREATE INDEX IF NOT EXISTS "membership_requests_userId_status_createdAt_idx"
ON "membership_requests"("userId", "status", "createdAt");

CREATE INDEX IF NOT EXISTS "membership_requests_email_status_createdAt_idx"
ON "membership_requests"("email", "status", "createdAt");

ALTER TABLE "membership_requests"
ADD CONSTRAINT "membership_requests_userId_fkey"
FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- Member portal notifications
CREATE TABLE IF NOT EXISTS "membership_notifications" (
  "id" TEXT NOT NULL,
  "userId" TEXT NOT NULL,
  "title" TEXT NOT NULL,
  "body" TEXT,
  "type" TEXT,
  "readAt" TIMESTAMP(3),
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,

  CONSTRAINT "membership_notifications_pkey" PRIMARY KEY ("id")
);

CREATE INDEX IF NOT EXISTS "membership_notifications_userId_createdAt_idx"
ON "membership_notifications"("userId", "createdAt");

CREATE INDEX IF NOT EXISTS "membership_notifications_userId_readAt_idx"
ON "membership_notifications"("userId", "readAt");

ALTER TABLE "membership_notifications"
ADD CONSTRAINT "membership_notifications_userId_fkey"
FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

