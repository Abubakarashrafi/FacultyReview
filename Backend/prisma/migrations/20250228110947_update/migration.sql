-- AlterTable
ALTER TABLE "Review" ADD COLUMN     "Attendance" INTEGER DEFAULT 0;

-- AlterTable
ALTER TABLE "Teacher" ADD COLUMN     "TotalAttendance_Review" DOUBLE PRECISION DEFAULT 0.0;
