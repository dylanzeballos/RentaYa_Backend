-- AlterTable
ALTER TABLE "interests" ALTER COLUMN "status" SET DEFAULT 'pendiente';

-- AlterTable
ALTER TABLE "reports" ALTER COLUMN "status" SET DEFAULT 'pendiente';

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "verificationStatus" SET DEFAULT 'pendiente';
