-- AlterTable
ALTER TABLE "properties" ADD COLUMN     "paymentId" UUID;

-- CreateTable
CREATE TABLE "payment_types" (
    "id" UUID NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "days" INTEGER NOT NULL,

    CONSTRAINT "payment_types_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "payment_types_name_key" ON "payment_types"("name");

-- AddForeignKey
ALTER TABLE "properties" ADD CONSTRAINT "properties_paymentId_fkey" FOREIGN KEY ("paymentId") REFERENCES "payment_types"("id") ON DELETE CASCADE ON UPDATE CASCADE;
