CREATE TYPE "UserRole" AS ENUM ('rentante', 'arrendador');

-- Add temporary column
ALTER TABLE "users" ADD COLUMN "role_new" "UserRole";

-- Migrate existing data: convert 'user', 'usuario' or any other value to 'rentante' by default
UPDATE "users" SET "role_new" = CASE 
  WHEN "role" IN ('rentante', 'arrendador') THEN "role"::text::"UserRole"
  ELSE 'rentante'::"UserRole"
END;

-- Make the new column NOT NULL
ALTER TABLE "users" ALTER COLUMN "role_new" SET NOT NULL;

-- Drop the old column
ALTER TABLE "users" DROP COLUMN "role";

-- Rename the new column
ALTER TABLE "users" RENAME COLUMN "role_new" TO "role";
