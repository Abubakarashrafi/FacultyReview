const prisma = require(".././db/db.config");

const getTeacherForApproval = async (req, res) => {
  try {
    const userId = req.user.id;
    if (!userId) return res.status(400).json({ msg: "User not found" });
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
        role: "ADMIN",
      },
    });
    if (!user) return res.status(400).json({ msg: "User access denied" });

    const teachers = await prisma.teacher.findMany({
      where: {
        approved: false,
      },
      select: {
        name: true,
        id: true,
        courses: {
          select: {
            course: {
              select: {
                name: true,
              },
            },
          },
        },
      },
    });
    if (!teachers) return res.status(200).json({ msg: "No request found" });
    const data = teachers.map((data) => ({
      id: data.id,
      teacher: data.name,
      courses: data.courses.map((c) => c.course.name),
    }));
    return res.status(200).json({ data });
  } catch (error) {
    return res.status(500).json({ msg: "internal server error" });
  }
};

const approveTeacher = async (req, res) => {
  try {
    const userId = req.user.id;
    const { id } = req.body;
    if (!userId) return res.status(400).json({ msg: "User not found" });
    if (typeof id !== "string" || id.trim() === "") {
      return res.status(400).json({ error: "Invalid teacher ID" });
    }
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
        role: "ADMIN",
      },
    });
    if (!user) return res.status(400).json({ msg: "User access denied" });

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
      // "P2025" means "Record not found"
      return res.status(404).json({ msg: "No teacher found" });
    }
   

    return res.status(500).json({ msg: "internal server error" });
  }
};

const deleteTeacher = async (req, res) => {
  try {
    const { id } = req.body;
    const userId = req.user.id;
    if (!userId) return res.status(400).json({ msg: "User not found" });
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
        role: "ADMIN",
      },
    });
    if (!user) return res.status(400).json({ msg: "User access denied" });
    const teacher = await prisma.teacher.delete({
      where: {
        id: id,
      },
    });
    if (!teacher) return res.status(200).json({ msg: "No request found" });
    return res.status(200).json({ msg: "Teacher deleted" });
  } catch (error) {
    if (error.code === "P2025") {
      // "P2025" means "Record not found"
      return res.status(404).json({ msg: "No teacher found" });
    }
    return res.status(500).json({ msg: "internal server error" });
  }
};

const updateTeacher = async (req, res) => {
  try {
    const { id, name } = req.body;
    if (typeof id !== "string" || id.trim() === "") {
      return res.status(400).json({ error: "Invalid teacher ID" });
    }
    if (!name)
      return res.status(400).json({ msg: "Please provide all the details" });

    const userId = req.user.id;

    if (!userId) return res.status(400).json({ msg: "User not found" });

    const user = await prisma.user.findUnique({
      where: {
        id: userId,
        role: "ADMIN",
      },
    });
    if (!user) return res.status(400).json({ msg: "User access denied" });
    const teacher = await prisma.teacher.update({
      where: { id },
      data: {
        name,
      },
    });
    if (!teacher) return res.status(400).json({ msg: "Teacher not found" });
    return res
      .status(200)
      .json({ msg: "Teacher updated successfully", teacher });
  } catch (error) {
    if (error.code === "P2025") {
      // "P2025" means "Record not found"
      return res.status(404).json({ msg: "No teacher found" });
    }
    return res.status(400).json({ msg: "internal server error" });
  }
};

const addCoursesToTeacher = async (req, res) => {
  try {
    const { id, courseName } = req.body;

    if (typeof id !== "string" || id.trim() === "") {
      return res.status(400).json({ error: "Invalid teacher ID" });
    }

    if (!courseName) {
      return res.status(400).json({ error: "course is required" });
    }

    const userId = req.user.id;

    if (!userId) return res.status(400).json({ msg: "User not found" });

    const user = await prisma.user.findUnique({
      where: {
        id: userId,
        role: "ADMIN",
      },
    });
    if (!user) return res.status(400).json({ msg: "User access denied" });

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
      // "P2025" means "Record not found"
      return res.status(404).json({ msg: "No teacher found" });
    }
    return res.status(500).json({ error: "internal server error" });
  }
};

const removeCourseFromTeacher = async (req, res) => {
  try {
    const { courseId, teacherId } = req.body;

    if (!courseId || !teacherId) {
      return res
        .status(400)
        .json({ error: "Teacher ID and course name are required" });
    }

    // Update teacher and remove a single course
    await prisma.teacherCourse.delete({
      where: {
        teacherId_courseId: {
          teacherId,
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

module.exports = {
  approveTeacher,
  deleteTeacher,
  getTeacherForApproval,
  updateTeacher,
  addCoursesToTeacher,
  removeCourseFromTeacher,
};
