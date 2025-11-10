-- AlterTable
ALTER TABLE "users" ADD COLUMN     "resetPasswordExpires" TIMESTAMP(0),
ADD COLUMN     "resetPasswordToken" TEXT;
