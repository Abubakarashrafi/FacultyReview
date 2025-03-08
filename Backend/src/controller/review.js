const prisma = require(".././db/db.config");


const createReview = async (req, res) => {
  try {
   
    
    const userId = req.user?.id;
    const { grading, workload, teaching,attendance } = req.body;
    const { teacherId } = req.params;
    
    if (!userId) return res.status(400).json({ error: "user id is missing" });
    
    
    if (!teacherId)
      return res.status(400).json({ error: "teacher id is missing" });

    if (
      [grading, workload, teaching,attendance].some(
        (field) => field == null || isNaN(field)
      )
    )
      return res.status(400).json({ error: "all fields are required" });

    const teacherWithReviews = await prisma.teacher.findUnique({
      where: {
        id: teacherId,
        approved: true,
      },
      select: {
        reviews: {
          where: {
            userId,
          },
        },
      },
    });

    if (!teacherWithReviews)
      return res.status(400).json({ error: "Teacher doesn't exist" });
    if (teacherWithReviews.reviews.length > 0)
      return res.status(409).json({ error: "review already exist" });

    const addReview = await prisma.review.create({
      data: {
        grading,
        workload,
        teaching,
        Attendance:attendance,
        teacherId,
        userId,
      },
    });
   const updateRating= await prisma.teacher.update({
      where: {
        id: teacherId
      },
      data: {
     TotalGrading_Review:{
      increment:grading
      },
      TotalWorkload_Review:{
        increment:workload
      },
      TotalTeaching_Review:{
        increment:teaching
      
     },
      TotalAttendance_Review:{
        increment:attendance
      },
     TotalReviews:{
       increment:teaching+workload+grading+attendance
     
      }
    }
  });
    
    if(!updateRating) return res.status(400).json({error:"something went wrong while updating rating"})

    if (!addReview)
      return res
        .status(400)
        .json({ error: "something went wrong while adding review" });
    return res.status(200).json({ msg: "review added successfully" });
  } catch (error) {
  
    
    return res.status(500).json({ error: "internal server error" });
  }
};



module.exports = { createReview };