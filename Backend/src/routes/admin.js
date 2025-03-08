const express= require("express");
const adminRouter = express.Router();
const {auth,isAdmin} = require("../middleware/auth");
const {approveTeacher,deleteTeacher,getStats,updateTeacher,addCoursesToTeacher,removeCourseFromTeacher} = require("../controller/admin");

adminRouter.get("/stats",isAdmin,getStats);
adminRouter.put("/teacher",isAdmin,approveTeacher);
adminRouter.delete("/teacher",isAdmin,deleteTeacher);
adminRouter.patch("/teacher/:id",isAdmin,updateTeacher);
adminRouter.patch("/course-update/:id",isAdmin,addCoursesToTeacher);
adminRouter.delete("/course-delete/:id",isAdmin,removeCourseFromTeacher)


module.exports = adminRouter;

