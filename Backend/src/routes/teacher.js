const express = require("express");
const teacherRoute = express.Router();
const { createTeacher,getAllTeachers,getTeacher,getUserReviewedTeachers } = require("../controller/teacher.js");
const auth = require("../middleware/auth");


teacherRoute.get("/", getAllTeachers);
teacherRoute.post("/", auth,createTeacher);
teacherRoute.get("/user",auth, getUserReviewedTeachers);
teacherRoute.get("/:id", getTeacher);

module.exports = teacherRoute;