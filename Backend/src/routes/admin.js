const express= require("express");
const adminRouter = express.Router();
const auth = require("../middleware/auth");
const {approveTeacher,deleteTeacher,getTeacherForApproval,updateTeacher,addCoursesToTeacher,removeCourseFromTeacher} = require("../controller/admin");

adminRouter.get("/teacher",auth,getTeacherForApproval);
adminRouter.put("/teacher",auth,approveTeacher);
adminRouter.delete("/teacher",auth,deleteTeacher);
adminRouter.patch("/teacher",auth,updateTeacher);
adminRouter.patch("/course-update",auth,addCoursesToTeacher);
adminRouter.delete("/course-delete",auth,removeCourseFromTeacher)


module.exports = adminRouter;

