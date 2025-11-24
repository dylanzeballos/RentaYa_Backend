/*
  Warnings:

  - You are about to drop the column `bathrooms` on the `properties` table. All the data in the column will be lost.
  - You are about to drop the column `bedrooms` on the `properties` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "properties" DROP COLUMN "bathrooms",
DROP COLUMN "bedrooms",
ALTER COLUMN "status" SET DEFAULT 'disponible';
