const prisma = require(".././db/db.config");



const approveTeacher = async (req, res) => {
  try {
    
    const { id } = req.body;
   
    if (typeof id !== "string" || id.trim() === "") {
      return res.status(400).json({ error: "Invalid teacher ID" });
    }
   
   
    const teacher = await prisma.teacher.update({
      where: {
        id,
      },
      data: {
        approved: true,
      },
    });
    if (!teacher) return res.status(200).json({ msg: "No request found" });
    return res.status(200).json({ msg: "Teacher approved" });
  } catch (error) {
    if (error.code === "P2025") {
     
      return res.status(404).json({ msg: "No teacher found" });
    }
   
   
    
    return res.status(500).json({ msg: "internal server error" });
  }
};

const deleteTeacher = async (req, res) => {
  try {
    const { id } = req.body;
    const teacher = await prisma.teacher.delete({
      where: {
        id: id,
      },
    });
    if (!teacher) return res.status(200).json({ msg: "No request found" });
    return res.status(200).json({ msg: "Teacher deleted" });
  } catch (error) {
    if (error.code === "P2025") {
     
      return res.status(404).json({ msg: "No teacher found" });
    }
    return res.status(500).json({ msg: "internal server error" });
  }
};

const updateTeacher = async (req, res) => {
  try {
    const {id} = req.params;
    const { name } = req.body;
   
    
    if (!name)
      return res.status(400).json({ msg: "Please provide all the details" });

    
   
    const teacher = await prisma.teacher.update({
      where: { id },
      data: {
        name,
      },
    });
    if (!teacher) return res.status(400).json({ msg: "Teacher not found" });
    return res
      .status(200)
      .json({ msg: "Teacher updated successfully" });
  } catch (error) {
    if (error.code === "P2025") {
     
      return res.status(404).json({ msg: "No teacher found" });
    }
    return res.status(400).json({ msg: "internal server error" });
  }
};

const addCoursesToTeacher = async (req, res) => {
  try {
    const {id} = req.params;
    const {  courseName } = req.body;
    

    if (typeof id !== "string" || id.trim() === "") {
      return res.status(400).json({ error: "Invalid teacher ID" });
    }

    if (!courseName) {
      return res.status(400).json({ error: "course is required" });
    }

   
    const teacher = await prisma.teacher.update({
      where: { id },
      data: {
        courses: {
          create: {
            course: {
              connectOrCreate: {
                where: { name: courseName },
                create: { name: courseName },
              },
            },
          },
        },
      },
      include: {
        courses: { select: { course: { select: { name: true } } } },
      },
    });

    return res.status(200).json({ message: "Courses added", teacher });
  } catch (error) {
    if (error.code === "P2025") {
     
      return res.status(404).json({ msg: "No teacher found" });
    }
    return res.status(500).json({ error: "internal server error" });
  }
};

const removeCourseFromTeacher = async (req, res) => {
  try {
    let {id} =req.params;
    const { courseId } = req.body;

    if (!courseId || !id) {
      return res
        .status(400)
        .json({ error: "Teacher ID and course id are required" });
    }


    await prisma.teacherCourse.delete({
      where: {
        teacherId_courseId: {
          teacherId:id,
          courseId: Number(courseId),
        },
      },
    });

    return res.status(200).json({ message: "Course removed" });
  } catch (error) {
   
    return res
      .status(500)
      .json({ error: "Record doesn't exist", msg: error.message });
  }
};


const getStats = async(_,res)=>{
  try {
    const stats = await prisma.$transaction([
      prisma.user.count(),
      prisma.review.count(),
      prisma.teacher.groupBy({
      by:['approved'],
      _count:{
        _all:true
      }
     })
  
    ])
    const [totalUsers,totalReviews,totalTeacher] = stats; 
    
    const teacherCounts = {
      totalApprovedTeachers:
        totalTeacher.find((stat) => stat.approved)?._count._all || 0,
      totalUnapprovedTeachers:
        totalTeacher.find((stat) => !stat.approved)?._count._all || 0,
    };
    if(!stats) return res.status(400).json({error:"unable to calculate stats"});
    return res.status(200).json({
      totalUsers,
      totalReviews,
      pending:teacherCounts.totalUnapprovedTeachers,
      totalTeacher: teacherCounts.totalApprovedTeachers+teacherCounts.totalUnapprovedTeachers
    })
  } catch (error) {
   
    
    return res.status(500).json({err:"internal server error"})
  }
}

module.exports = {
  approveTeacher,
  deleteTeacher,
  getStats,
  updateTeacher,
  addCoursesToTeacher,
  removeCourseFromTeacher,
};
