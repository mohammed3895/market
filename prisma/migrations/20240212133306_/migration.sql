/*
  Warnings:

  - Added the required column `ownerId` to the `cart` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "products" DROP CONSTRAINT "products_orderedById_fkey";

-- AlterTable
ALTER TABLE "cart" ADD COLUMN     "ownerId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_orderedById_fkey" FOREIGN KEY ("orderedById") REFERENCES "User"("email") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cart" ADD CONSTRAINT "cart_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("email") ON DELETE RESTRICT ON UPDATE CASCADE;
