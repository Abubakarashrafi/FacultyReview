const express = require("express");
const reviewRouter = express.Router()
const auth = require("../middleware/auth");
const {createReview} = require("../controller/review");

reviewRouter.post("/:teacherId",auth,createReview);



module.exports = reviewRouter;