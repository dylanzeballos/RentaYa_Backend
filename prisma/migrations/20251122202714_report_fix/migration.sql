/*
  Warnings:

  - You are about to drop the column `fileUrl` on the `reports` table. All the data in the column will be lost.
  - You are about to drop the column `parameters` on the `reports` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `reports` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "reports" DROP COLUMN "fileUrl",
DROP COLUMN "parameters",
DROP COLUMN "type",
ALTER COLUMN "status" DROP DEFAULT;
