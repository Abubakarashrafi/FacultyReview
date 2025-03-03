const prisma = require(".././db/db.config");

const createTeacher = async (req, res) => {
  try {
    const { name, courses } = req.body;

    const userId = req.user.id;

    if (!name || !Array.isArray(courses))
      return res.status(400).json({ error: "Name and courses are required" });

    const User = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });
    if (!User) return res.status(403).json({ error: "user not found" });

    const isTeacher = await prisma.teacher.findUnique({
      where: {
        name,
      },
    });
    if (isTeacher)
      return res.status(400).json({ error: "Teacher already exist" });

    const isAdmin = req.user.role === "ADMIN";
    const newTeacher = await prisma.teacher.create({
      data: {
        name,
        approved: isAdmin,
        courses: {
          create: courses.map((courseName) => ({
            course: {
              connectOrCreate: {
                where: { name: courseName },
                create: { name: courseName },
              },
            },
          })),
        },
      },
     
    });
    if (!newTeacher)
      return res.status(400).json({ error: "failed to add new teacher" });
    return res
      .status(200)
      .json({ msg: "teacher created successfully"});
  } catch (error) {
   
    
    return res.status(500).json({ error: "internal server error" });
  }
};

const getAllTeachers = async (req, res) => {
  try {
    
    let { search,order } = req.query;
    order = order === "asc" ? "ASC" : "DESC"; // Default to DESC

    // Construct WHERE clause dynamically
    let whereClause = `WHERE t.approved = true`;
     whereClause += ` AND LOWER(t.name) LIKE LOWER('%${search}%')`;
      whereClause += ` OR EXISTS (
      SELECT 1 FROM "TeacherCourse" tc 
      JOIN "Course" c ON tc."courseId" = c.id 
      WHERE tc."teacherId" = t.id 
      AND LOWER(c.name) LIKE LOWER('%${search}%')
    )`;

    // Query to fetch teachers, calculate avgRating, filter, and sort
  const teachers = await prisma.$queryRawUnsafe(`
  SELECT 
    t.id, 
    t.name, 
    COALESCE(t."TotalReviews" / NULLIF(4 * (SELECT COUNT(*) FROM "Review" r WHERE r."teacherId" = t.id), 0), 0) AS "avgRating",
    (SELECT COUNT(*) FROM "Review" r WHERE r."teacherId" = t.id)::TEXT AS "reviewCount", -- Corrected review count
    json_agg(DISTINCT c.name) AS courses
  FROM "Teacher" t
  LEFT JOIN "TeacherCourse" tc ON t.id = tc."teacherId"
  LEFT JOIN "Course" c ON tc."courseId" = c.id
  ${whereClause}
  GROUP BY t.id, t."TotalReviews"
  ORDER BY "avgRating" ${order}
  LIMIT 6;
`);

   

    return res.status(200).json({ formattedTeachers: teachers });
  } catch (error) {
   
    return res.status(500).json({ error: "Internal server error" });
  }
};



const getTeacher = async (req, res) => {
  try {
    const { id } = req.params;
    
    if (!id) return res.status(400).json({ error: "Invalid id" });

    const teacher = await prisma.teacher.findUnique({
      where: {
        id,
        approved: true,
      },
      select: {
        name: true,
        TotalReviews: true,
        TotalGrading_Review: true,
        TotalWorkload_Review: true,
        TotalTeaching_Review: true,
        TotalAttendance_Review: true,
        reviews: {
          select: {
            grading: true,
            workload: true,
            teaching: true,
            Attendance: true,
          },
        },
        courses: {
          select: {
            course: true,
          },
        },
      },
    });
    if (!teacher) return res.status(404).json({ error: "Teacher not found" });
    const formattedCourses = teacher.courses.map((c) => c.course.name);
    const { courses,reviews, ...rest } = teacher;
     const avgGrading =
       teacher.TotalGrading_Review / teacher.reviews.length || 0;
     const avgWorkload =
       teacher.TotalWorkload_Review / teacher.reviews.length || 0;
     const avgTeaching =
       teacher.TotalTeaching_Review / teacher.reviews.length || 0;
     const avgAttendance =
       teacher.TotalAttendance_Review / teacher.reviews.length || 0;

     // Calculate overall average
     const overallAverage =
       (avgGrading + avgWorkload + avgTeaching + avgAttendance) / 4;
    return res.status(200).json({
      teacher: rest,
      courses: formattedCourses,
      avgGrading: Number(avgGrading.toFixed(2)),
      avgWorkload: Number(avgWorkload.toFixed(2)),
      avgTeaching: Number(avgTeaching.toFixed(2)),
      avgAttendance: Number(avgAttendance.toFixed(2)),
      overallAverage: Number(overallAverage.toFixed(2)),
      ReviewCount: teacher.reviews.length,
    });
  } catch (error) {
   
    return res.status(500).json({ error: "internal server error" });
  }
};

const getUserReviewedTeachers = async (req, res) => {
  const userId = req.user.id;
 
  
  if(!userId) return res.status(400).json({error:"Invalid user id"})
const user = await prisma.user.findUnique({
  where: { id: userId },
  select: {
    reviews: {
      select: {
        grading: true,
        workload: true,
        teaching: true,
        createdAt: true,
        Attendance:true,
        teacher: {
          select: {
            id: true,
            name: true,
            courses: {
              select: {
                course: {
                  select: { name: true },
                },
              },
            },
          },
        },
      },
    },
  },
});



  const data = user.reviews.map((review)=>{
    return {name:review.teacher.name,GradingReview:review.grading,workloadReview:review.workload,
    teachingReview:review.teaching,
    attendanceReview:review.Attendance,
    avgReview:((review.grading+review.workload+review.teaching+review.Attendance)/4).toFixed(2),
    courses:review.teacher.courses.map((c)=>c.course.name)}
      
  })


if(!user) return res.status(404).json({error:"User not found"})
  return res.status(200).json({data})

}



module.exports = { createTeacher, getAllTeachers, getTeacher,getUserReviewedTeachers };
