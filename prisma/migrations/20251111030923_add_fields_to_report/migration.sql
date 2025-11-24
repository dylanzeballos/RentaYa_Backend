/*
  Warnings:

  - Added the required column `propertyId` to the `reports` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "reports" ADD COLUMN     "finishDate" TIMESTAMP(0),
ADD COLUMN     "propertyId" UUID NOT NULL,
ADD COLUMN     "startDate" TIMESTAMP(0),
ADD COLUMN     "status" VARCHAR(30) NOT NULL DEFAULT 'pending',
ADD COLUMN     "totalPrice" DECIMAL(10,2),
ADD COLUMN     "uploadedAt" TIMESTAMP(0);

-- CreateIndex
CREATE INDEX "reports_propertyId_idx" ON "reports"("propertyId");

-- AddForeignKey
ALTER TABLE "reports" ADD CONSTRAINT "reports_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "properties"("id") ON DELETE CASCADE ON UPDATE CASCADE;
