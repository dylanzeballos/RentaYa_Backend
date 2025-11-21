/*
  Warnings:

  - You are about to drop the column `operationType` on the `properties` table. All the data in the column will be lost.
  - You are about to drop the column `locations` on the `user_preferences` table. All the data in the column will be lost.
  - You are about to drop the column `modality` on the `user_preferences` table. All the data in the column will be lost.
  - You are about to drop the column `propertyTypes` on the `user_preferences` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "properties" DROP COLUMN "operationType",
ADD COLUMN     "operationTypeId" UUID,
ADD COLUMN     "propertyTypeId" UUID,
ADD COLUMN     "provinceId" UUID;

-- AlterTable
ALTER TABLE "user_preferences" DROP COLUMN "locations",
DROP COLUMN "modality",
DROP COLUMN "propertyTypes",
ADD COLUMN     "operationTypeId" UUID;

-- CreateTable
CREATE TABLE "operation_types" (
    "id" UUID NOT NULL,
    "name" VARCHAR(20) NOT NULL,

    CONSTRAINT "operation_types_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "property_types" (
    "id" UUID NOT NULL,
    "name" VARCHAR(50) NOT NULL,

    CONSTRAINT "property_types_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "provinces" (
    "id" UUID NOT NULL,
    "name" VARCHAR(100) NOT NULL,

    CONSTRAINT "provinces_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_preference_provinces" (
    "id" UUID NOT NULL,
    "userPreferenceId" UUID NOT NULL,
    "provinceId" UUID NOT NULL,

    CONSTRAINT "user_preference_provinces_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_preference_property_types" (
    "id" UUID NOT NULL,
    "userPreferenceId" UUID NOT NULL,
    "propertyTypeId" UUID NOT NULL,

    CONSTRAINT "user_preference_property_types_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_preference_operation_types" (
    "id" UUID NOT NULL,
    "userPreferenceId" UUID NOT NULL,
    "operationTypeId" UUID NOT NULL,

    CONSTRAINT "user_preference_operation_types_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "operation_types_name_key" ON "operation_types"("name");

-- CreateIndex
CREATE UNIQUE INDEX "property_types_name_key" ON "property_types"("name");

-- CreateIndex
CREATE UNIQUE INDEX "provinces_name_key" ON "provinces"("name");

-- CreateIndex
CREATE UNIQUE INDEX "user_preference_provinces_userPreferenceId_provinceId_key" ON "user_preference_provinces"("userPreferenceId", "provinceId");

-- CreateIndex
CREATE UNIQUE INDEX "user_preference_property_types_userPreferenceId_propertyTyp_key" ON "user_preference_property_types"("userPreferenceId", "propertyTypeId");

-- CreateIndex
CREATE UNIQUE INDEX "user_preference_operation_types_userPreferenceId_operationT_key" ON "user_preference_operation_types"("userPreferenceId", "operationTypeId");

-- AddForeignKey
ALTER TABLE "properties" ADD CONSTRAINT "properties_operationTypeId_fkey" FOREIGN KEY ("operationTypeId") REFERENCES "operation_types"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "properties" ADD CONSTRAINT "properties_propertyTypeId_fkey" FOREIGN KEY ("propertyTypeId") REFERENCES "property_types"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "properties" ADD CONSTRAINT "properties_provinceId_fkey" FOREIGN KEY ("provinceId") REFERENCES "provinces"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_preferences" ADD CONSTRAINT "user_preferences_operationTypeId_fkey" FOREIGN KEY ("operationTypeId") REFERENCES "operation_types"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_preference_provinces" ADD CONSTRAINT "user_preference_provinces_userPreferenceId_fkey" FOREIGN KEY ("userPreferenceId") REFERENCES "user_preferences"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_preference_provinces" ADD CONSTRAINT "user_preference_provinces_provinceId_fkey" FOREIGN KEY ("provinceId") REFERENCES "provinces"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_preference_property_types" ADD CONSTRAINT "user_preference_property_types_userPreferenceId_fkey" FOREIGN KEY ("userPreferenceId") REFERENCES "user_preferences"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_preference_property_types" ADD CONSTRAINT "user_preference_property_types_propertyTypeId_fkey" FOREIGN KEY ("propertyTypeId") REFERENCES "property_types"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_preference_operation_types" ADD CONSTRAINT "user_preference_operation_types_userPreferenceId_fkey" FOREIGN KEY ("userPreferenceId") REFERENCES "user_preferences"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_preference_operation_types" ADD CONSTRAINT "user_preference_operation_types_operationTypeId_fkey" FOREIGN KEY ("operationTypeId") REFERENCES "operation_types"("id") ON DELETE CASCADE ON UPDATE CASCADE;
