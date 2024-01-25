/*
  Warnings:

  - Added the required column `street` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Made the column `city` on table `Order` required. This step will fail if there are existing NULL values in that column.
  - Made the column `country` on table `Order` required. This step will fail if there are existing NULL values in that column.
  - Made the column `state` on table `Order` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "street" TEXT NOT NULL,
ALTER COLUMN "city" SET NOT NULL,
ALTER COLUMN "country" SET NOT NULL,
ALTER COLUMN "state" SET NOT NULL;
