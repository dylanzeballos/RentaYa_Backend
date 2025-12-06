/*
  Warnings:

  - You are about to drop the column `endDate` on the `interests` table. All the data in the column will be lost.
  - You are about to drop the column `startDate` on the `interests` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "interests" DROP COLUMN "endDate",
DROP COLUMN "startDate";
