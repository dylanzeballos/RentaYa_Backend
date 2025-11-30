/*
  Warnings:

  - A unique constraint covering the columns `[interestId]` on the table `reports` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "reports" ADD COLUMN     "interestId" UUID;

-- CreateIndex
CREATE UNIQUE INDEX "reports_interestId_key" ON "reports"("interestId");

-- AddForeignKey
ALTER TABLE "reports" ADD CONSTRAINT "reports_interestId_fkey" FOREIGN KEY ("interestId") REFERENCES "interests"("id") ON DELETE SET NULL ON UPDATE CASCADE;
