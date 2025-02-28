const express = require("express");
const userRouter = express.Router();
const auth = require("../middleware/auth");
const {createUser,getUserReview} = require("../controller/user");

userRouter.post("/",createUser);
userRouter.get("/", auth, getUserReview);

module.exports = userRouter;