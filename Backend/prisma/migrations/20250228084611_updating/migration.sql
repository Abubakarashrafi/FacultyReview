/*
  Warnings:

  - You are about to drop the column `avgGrading_Review` on the `Teacher` table. All the data in the column will be lost.
  - You are about to drop the column `avgRating` on the `Teacher` table. All the data in the column will be lost.
  - You are about to drop the column `avgTeaching_Review` on the `Teacher` table. All the data in the column will be lost.
  - You are about to drop the column `avgWorkload_Review` on the `Teacher` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Teacher" DROP COLUMN "avgGrading_Review",
DROP COLUMN "avgRating",
DROP COLUMN "avgTeaching_Review",
DROP COLUMN "avgWorkload_Review",
ADD COLUMN     "TotalGrading_Review" DOUBLE PRECISION DEFAULT 0,
ADD COLUMN     "TotalTeaching_Review" DOUBLE PRECISION DEFAULT 0,
ADD COLUMN     "TotalWorkload_Review" DOUBLE PRECISION DEFAULT 0;
