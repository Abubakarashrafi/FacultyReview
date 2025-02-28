/*
  Warnings:

  - You are about to drop the column `total_Avg_Rating` on the `Review` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Review" DROP COLUMN "total_Avg_Rating",
ALTER COLUMN "grading" DROP NOT NULL,
ALTER COLUMN "teaching" DROP NOT NULL,
ALTER COLUMN "workload" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Teacher" ADD COLUMN     "avgRating" DOUBLE PRECISION DEFAULT 0;
