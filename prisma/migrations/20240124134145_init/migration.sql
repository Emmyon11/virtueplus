/*
  Warnings:

  - Added the required column `mobileNo` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "city" TEXT,
ADD COLUMN     "country" TEXT,
ADD COLUMN     "mobileNo" TEXT NOT NULL,
ADD COLUMN     "state" TEXT;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "address" TEXT,
ADD COLUMN     "city" TEXT,
ADD COLUMN     "country" TEXT,
ADD COLUMN     "mobileNo" TEXT,
ADD COLUMN     "state" TEXT;
