/*
  Warnings:

  - You are about to drop the `busquedas_guardadas` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `favoritos` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `fotos_inmueble` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `inmuebles` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `intereses` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `mensajes` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `notificaciones` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `reportes` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `resenas` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `usuarios` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."busquedas_guardadas" DROP CONSTRAINT "busquedas_guardadas_userId_fkey";

-- DropForeignKey
ALTER TABLE "public"."favoritos" DROP CONSTRAINT "favoritos_propertyId_fkey";

-- DropForeignKey
ALTER TABLE "public"."favoritos" DROP CONSTRAINT "favoritos_userId_fkey";

-- DropForeignKey
ALTER TABLE "public"."fotos_inmueble" DROP CONSTRAINT "fotos_inmueble_propertyId_fkey";

-- DropForeignKey
ALTER TABLE "public"."inmuebles" DROP CONSTRAINT "inmuebles_ownerId_fkey";

-- DropForeignKey
ALTER TABLE "public"."intereses" DROP CONSTRAINT "intereses_propertyId_fkey";

-- DropForeignKey
ALTER TABLE "public"."intereses" DROP CONSTRAINT "intereses_userId_fkey";

-- DropForeignKey
ALTER TABLE "public"."mensajes" DROP CONSTRAINT "mensajes_interestId_fkey";

-- DropForeignKey
ALTER TABLE "public"."mensajes" DROP CONSTRAINT "mensajes_receiverId_fkey";

-- DropForeignKey
ALTER TABLE "public"."mensajes" DROP CONSTRAINT "mensajes_senderId_fkey";

-- DropForeignKey
ALTER TABLE "public"."notificaciones" DROP CONSTRAINT "notificaciones_userId_fkey";

-- DropForeignKey
ALTER TABLE "public"."reportes" DROP CONSTRAINT "reportes_userId_fkey";

-- DropForeignKey
ALTER TABLE "public"."resenas" DROP CONSTRAINT "resenas_propertyId_fkey";

-- DropForeignKey
ALTER TABLE "public"."resenas" DROP CONSTRAINT "resenas_userId_fkey";

-- DropTable
DROP TABLE "public"."busquedas_guardadas";

-- DropTable
DROP TABLE "public"."favoritos";

-- DropTable
DROP TABLE "public"."fotos_inmueble";

-- DropTable
DROP TABLE "public"."inmuebles";

-- DropTable
DROP TABLE "public"."intereses";

-- DropTable
DROP TABLE "public"."mensajes";

-- DropTable
DROP TABLE "public"."notificaciones";

-- DropTable
DROP TABLE "public"."reportes";

-- DropTable
DROP TABLE "public"."resenas";

-- DropTable
DROP TABLE "public"."usuarios";

-- CreateTable
CREATE TABLE "users" (
    "id" UUID NOT NULL,
    "googleId" TEXT,
    "profilePhoto" TEXT,
    "email" VARCHAR(255) NOT NULL,
    "passwordHash" TEXT,
    "fullName" VARCHAR(255),
    "phone" VARCHAR(20),
    "role" VARCHAR(20) NOT NULL DEFAULT 'usuario',
    "verificationStatus" VARCHAR(20) NOT NULL DEFAULT 'pendiente',
    "refreshToken" TEXT,
    "createdAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(0) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "properties" (
    "id" UUID NOT NULL,
    "ownerId" UUID NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "description" TEXT,
    "address" VARCHAR(500),
    "city" VARCHAR(100) NOT NULL DEFAULT 'Cochabamba',
    "bedrooms" INTEGER,
    "bathrooms" INTEGER,
    "areaM2" DECIMAL(10,2),
    "price" DECIMAL(12,2) NOT NULL,
    "operationType" VARCHAR(20) NOT NULL,
    "status" VARCHAR(20) NOT NULL DEFAULT 'disponible',
    "createdAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(0) NOT NULL,

    CONSTRAINT "properties_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "interests" (
    "id" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "propertyId" UUID NOT NULL,
    "message" TEXT,
    "status" VARCHAR(20) NOT NULL DEFAULT 'pendiente',
    "createdAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "interests_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "messages" (
    "id" BIGSERIAL NOT NULL,
    "senderId" UUID NOT NULL,
    "receiverId" UUID NOT NULL,
    "interestId" UUID,
    "content" TEXT NOT NULL,
    "read" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "messages_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "property_photos" (
    "id" BIGSERIAL NOT NULL,
    "propertyId" UUID NOT NULL,
    "url" TEXT NOT NULL,
    "order" INTEGER,
    "createdAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "property_photos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "reviews" (
    "id" BIGSERIAL NOT NULL,
    "userId" UUID NOT NULL,
    "propertyId" UUID NOT NULL,
    "content" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "reviews_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "notifications" (
    "id" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "type" VARCHAR(50) NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "content" TEXT NOT NULL,
    "read" BOOLEAN NOT NULL DEFAULT false,
    "metadata" JSONB,
    "createdAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "notifications_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "reports" (
    "id" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "type" VARCHAR(50) NOT NULL,
    "parameters" JSONB,
    "fileUrl" VARCHAR(500),
    "createdAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "reports_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "favorites" (
    "id" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "propertyId" UUID NOT NULL,
    "createdAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "favorites_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "saved_searches" (
    "id" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "searchParameters" JSONB NOT NULL,
    "searchName" VARCHAR(255),
    "createdAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "saved_searches_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_googleId_key" ON "users"("googleId");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE INDEX "properties_city_idx" ON "properties"("city");

-- CreateIndex
CREATE INDEX "properties_status_idx" ON "properties"("status");

-- CreateIndex
CREATE INDEX "properties_price_idx" ON "properties"("price");

-- CreateIndex
CREATE INDEX "properties_ownerId_idx" ON "properties"("ownerId");

-- CreateIndex
CREATE INDEX "interests_userId_idx" ON "interests"("userId");

-- CreateIndex
CREATE INDEX "interests_propertyId_idx" ON "interests"("propertyId");

-- CreateIndex
CREATE INDEX "messages_senderId_receiverId_idx" ON "messages"("senderId", "receiverId");

-- CreateIndex
CREATE INDEX "messages_interestId_idx" ON "messages"("interestId");

-- CreateIndex
CREATE INDEX "property_photos_propertyId_idx" ON "property_photos"("propertyId");

-- CreateIndex
CREATE INDEX "reviews_userId_idx" ON "reviews"("userId");

-- CreateIndex
CREATE INDEX "reviews_propertyId_idx" ON "reviews"("propertyId");

-- CreateIndex
CREATE INDEX "notifications_userId_idx" ON "notifications"("userId");

-- CreateIndex
CREATE INDEX "notifications_read_idx" ON "notifications"("read");

-- CreateIndex
CREATE INDEX "reports_userId_idx" ON "reports"("userId");

-- CreateIndex
CREATE INDEX "favorites_userId_idx" ON "favorites"("userId");

-- CreateIndex
CREATE INDEX "favorites_propertyId_idx" ON "favorites"("propertyId");

-- CreateIndex
CREATE UNIQUE INDEX "favorites_userId_propertyId_key" ON "favorites"("userId", "propertyId");

-- CreateIndex
CREATE INDEX "saved_searches_userId_idx" ON "saved_searches"("userId");

-- AddForeignKey
ALTER TABLE "properties" ADD CONSTRAINT "properties_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "interests" ADD CONSTRAINT "interests_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "interests" ADD CONSTRAINT "interests_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "properties"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "messages" ADD CONSTRAINT "messages_senderId_fkey" FOREIGN KEY ("senderId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "messages" ADD CONSTRAINT "messages_receiverId_fkey" FOREIGN KEY ("receiverId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "messages" ADD CONSTRAINT "messages_interestId_fkey" FOREIGN KEY ("interestId") REFERENCES "interests"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "property_photos" ADD CONSTRAINT "property_photos_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "properties"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reviews" ADD CONSTRAINT "reviews_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reviews" ADD CONSTRAINT "reviews_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "properties"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notifications" ADD CONSTRAINT "notifications_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reports" ADD CONSTRAINT "reports_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "favorites" ADD CONSTRAINT "favorites_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "favorites" ADD CONSTRAINT "favorites_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "properties"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "saved_searches" ADD CONSTRAINT "saved_searches_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
