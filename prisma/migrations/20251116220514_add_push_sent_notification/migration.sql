-- AlterTable
ALTER TABLE "notifications" ADD COLUMN     "deleted" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "pushSent" BOOLEAN NOT NULL DEFAULT false;

-- CreateIndex
CREATE INDEX "notifications_deleted_idx" ON "notifications"("deleted");
