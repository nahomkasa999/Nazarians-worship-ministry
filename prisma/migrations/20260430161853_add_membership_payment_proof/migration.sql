-- AlterTable
ALTER TABLE "membership_requests" ADD COLUMN     "paymentProofStoragePath" TEXT,
ADD COLUMN     "paymentSubmittedAt" TIMESTAMP(3);

-- CreateIndex
CREATE INDEX "teachings_slug_idx" ON "teachings"("slug");
