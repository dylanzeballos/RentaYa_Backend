-- AlterTable
ALTER TABLE "reviews" ADD COLUMN     "reportId" UUID;

-- CreateIndex
CREATE INDEX "reviews_reportId_idx" ON "reviews"("reportId");

-- AddForeignKey
ALTER TABLE "reviews" ADD CONSTRAINT "reviews_reportId_fkey" FOREIGN KEY ("reportId") REFERENCES "reports"("id") ON DELETE SET NULL ON UPDATE CASCADE;
