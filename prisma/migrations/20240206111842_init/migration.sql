/*
  Warnings:

  - Made the column `productTitle` on table `OrderItem` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "OrderItem" ALTER COLUMN "productTitle" SET NOT NULL;
