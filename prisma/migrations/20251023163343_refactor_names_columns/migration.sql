-- CreateTable
CREATE TABLE "usuarios" (
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

    CONSTRAINT "usuarios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "inmuebles" (
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

    CONSTRAINT "inmuebles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "intereses" (
    "id" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "propertyId" UUID NOT NULL,
    "message" TEXT,
    "status" VARCHAR(20) NOT NULL DEFAULT 'pendiente',
    "createdAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "intereses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "mensajes" (
    "id" BIGSERIAL NOT NULL,
    "senderId" UUID NOT NULL,
    "receiverId" UUID NOT NULL,
    "interestId" UUID,
    "content" TEXT NOT NULL,
    "read" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "mensajes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "fotos_inmueble" (
    "id" BIGSERIAL NOT NULL,
    "propertyId" UUID NOT NULL,
    "url" TEXT NOT NULL,
    "order" INTEGER,
    "createdAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "fotos_inmueble_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "resenas" (
    "id" BIGSERIAL NOT NULL,
    "userId" UUID NOT NULL,
    "propertyId" UUID NOT NULL,
    "content" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "resenas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "notificaciones" (
    "id" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "type" VARCHAR(50) NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "content" TEXT NOT NULL,
    "read" BOOLEAN NOT NULL DEFAULT false,
    "metadata" JSONB,
    "createdAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "notificaciones_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "reportes" (
    "id" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "type" VARCHAR(50) NOT NULL,
    "parameters" JSONB,
    "fileUrl" VARCHAR(500),
    "createdAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "reportes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "favoritos" (
    "id" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "propertyId" UUID NOT NULL,
    "createdAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "favoritos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "busquedas_guardadas" (
    "id" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "searchParameters" JSONB NOT NULL,
    "searchName" VARCHAR(255),
    "createdAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "busquedas_guardadas_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_googleId_key" ON "usuarios"("googleId");

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_email_key" ON "usuarios"("email");

-- CreateIndex
CREATE INDEX "inmuebles_city_idx" ON "inmuebles"("city");

-- CreateIndex
CREATE INDEX "inmuebles_status_idx" ON "inmuebles"("status");

-- CreateIndex
CREATE INDEX "inmuebles_price_idx" ON "inmuebles"("price");

-- CreateIndex
CREATE INDEX "inmuebles_ownerId_idx" ON "inmuebles"("ownerId");

-- CreateIndex
CREATE INDEX "intereses_userId_idx" ON "intereses"("userId");

-- CreateIndex
CREATE INDEX "intereses_propertyId_idx" ON "intereses"("propertyId");

-- CreateIndex
CREATE INDEX "mensajes_senderId_receiverId_idx" ON "mensajes"("senderId", "receiverId");

-- CreateIndex
CREATE INDEX "mensajes_interestId_idx" ON "mensajes"("interestId");

-- CreateIndex
CREATE INDEX "fotos_inmueble_propertyId_idx" ON "fotos_inmueble"("propertyId");

-- CreateIndex
CREATE INDEX "resenas_userId_idx" ON "resenas"("userId");

-- CreateIndex
CREATE INDEX "resenas_propertyId_idx" ON "resenas"("propertyId");

-- CreateIndex
CREATE INDEX "notificaciones_userId_idx" ON "notificaciones"("userId");

-- CreateIndex
CREATE INDEX "notificaciones_read_idx" ON "notificaciones"("read");

-- CreateIndex
CREATE INDEX "reportes_userId_idx" ON "reportes"("userId");

-- CreateIndex
CREATE INDEX "favoritos_userId_idx" ON "favoritos"("userId");

-- CreateIndex
CREATE INDEX "favoritos_propertyId_idx" ON "favoritos"("propertyId");

-- CreateIndex
CREATE UNIQUE INDEX "favoritos_userId_propertyId_key" ON "favoritos"("userId", "propertyId");

-- CreateIndex
CREATE INDEX "busquedas_guardadas_userId_idx" ON "busquedas_guardadas"("userId");

-- AddForeignKey
ALTER TABLE "inmuebles" ADD CONSTRAINT "inmuebles_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "usuarios"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "intereses" ADD CONSTRAINT "intereses_userId_fkey" FOREIGN KEY ("userId") REFERENCES "usuarios"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "intereses" ADD CONSTRAINT "intereses_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "inmuebles"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mensajes" ADD CONSTRAINT "mensajes_senderId_fkey" FOREIGN KEY ("senderId") REFERENCES "usuarios"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mensajes" ADD CONSTRAINT "mensajes_receiverId_fkey" FOREIGN KEY ("receiverId") REFERENCES "usuarios"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mensajes" ADD CONSTRAINT "mensajes_interestId_fkey" FOREIGN KEY ("interestId") REFERENCES "intereses"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "fotos_inmueble" ADD CONSTRAINT "fotos_inmueble_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "inmuebles"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "resenas" ADD CONSTRAINT "resenas_userId_fkey" FOREIGN KEY ("userId") REFERENCES "usuarios"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "resenas" ADD CONSTRAINT "resenas_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "inmuebles"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notificaciones" ADD CONSTRAINT "notificaciones_userId_fkey" FOREIGN KEY ("userId") REFERENCES "usuarios"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reportes" ADD CONSTRAINT "reportes_userId_fkey" FOREIGN KEY ("userId") REFERENCES "usuarios"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "favoritos" ADD CONSTRAINT "favoritos_userId_fkey" FOREIGN KEY ("userId") REFERENCES "usuarios"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "favoritos" ADD CONSTRAINT "favoritos_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "inmuebles"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "busquedas_guardadas" ADD CONSTRAINT "busquedas_guardadas_userId_fkey" FOREIGN KEY ("userId") REFERENCES "usuarios"("id") ON DELETE CASCADE ON UPDATE CASCADE;
