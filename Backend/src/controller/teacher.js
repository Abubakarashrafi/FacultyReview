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
    console.log(error.message);
    
    return res.status(500).json({ error: "internal server error" });
  }
};

const getAllTeachers = async (req, res) => {
  try {
    const { name, course } = req.body;
    let { order = "desc" } = req.query;

    const filter = { approved: true };
    if (name) filter.name = { contains: name, mode: "insensitive" };
    if (course)
      filter.courses = {
        some: { course: { name: { contains: course, mode: "insensitive" } } },
      };

    const teachers = await prisma.teacher.findMany({
      where: filter,
      orderBy: {
        TotalReviews: order === "desc" ? "desc" : "asc",
      },
      include: {
        courses: {
          select: {
            course: {
              select: {
                name: true,
              },
            },
          },
        },
        reviews: {
          select: {
            grading: true,
            workload: true,
            teaching: true,
            Attendance: true,
          },
        },
      },
    });

    if (!teachers.length)
      return res.status(404).json({ error: "No teachers found" });

    const formattedTeachers = teachers.map((teacher) => ({
      id: teacher.id,
      rating: teacher.TotalReviews / (teacher.reviews.length * 4) || 0,

      name: teacher.name,
      courses: teacher.courses.map((c) => c.course.name),
    }));

    return res.status(200).json({ formattedTeachers });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: "internal server error" });
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

    return res
      .status(200)
      .json({
        teacher: rest,
        courses: formattedCourses,
        avgGrading: (teacher.TotalGrading_Review / teacher.reviews.length) || 0,
        avgWorkload: (teacher.TotalWorkload_Review / teacher.reviews.length) || 0,
        avgTeaching: (teacher.TotalTeaching_Review / teacher.reviews.length) || 0,
        avgAttendance: (teacher.TotalAttendance_Review / teacher.reviews.length) || 0,
        ReviewCount: teacher.reviews.length,
      });
  } catch (error) {
    console.log(error.message);
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
