/*
  Warnings:

  - Added the required column `productType` to the `OrderItem` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "OrderItem" ADD COLUMN     "pdfUrl" TEXT,
ADD COLUMN     "productType" "ProductTypes" NOT NULL;
