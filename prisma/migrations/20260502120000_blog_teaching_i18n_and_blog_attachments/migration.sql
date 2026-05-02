-- AlterTable
ALTER TABLE "blogs" ADD COLUMN     "titleAm" TEXT,
ADD COLUMN     "titleOm" TEXT,
ADD COLUMN     "excerptAm" TEXT,
ADD COLUMN     "excerptOm" TEXT,
ADD COLUMN     "contentAm" JSONB,
ADD COLUMN     "contentOm" JSONB;

-- AlterTable
ALTER TABLE "teachings" ADD COLUMN     "titleAm" TEXT,
ADD COLUMN     "titleOm" TEXT,
ADD COLUMN     "descriptionAm" TEXT,
ADD COLUMN     "descriptionOm" TEXT;

-- CreateTable
CREATE TABLE "blog_attachments" (
    "id" TEXT NOT NULL,
    "blogId" TEXT NOT NULL,
    "title" TEXT,
    "storagePath" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "blog_attachments_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "blog_attachments_blogId_createdAt_idx" ON "blog_attachments"("blogId", "createdAt");

-- AddForeignKey
ALTER TABLE "blog_attachments" ADD CONSTRAINT "blog_attachments_blogId_fkey" FOREIGN KEY ("blogId") REFERENCES "blogs"("id") ON DELETE CASCADE ON UPDATE CASCADE;
