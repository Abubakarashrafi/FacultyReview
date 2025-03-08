require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();
const PORT = 4000 || process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(
  cors({
    origin: process.env.ALLOWED_ORIGINS,
    credentials: true,
  })
);




const teacherRoute = require("./routes/teacher");

app.use("/api/v1/teacher", teacherRoute);

const reviewRoute = require("./routes/review");
app.use("/api/v1/review", reviewRoute);

const userRoute = require("./routes/user");
app.use("/api/v1/user", userRoute);

const adminRoute = require("./routes/admin");
app.use("/api/v1/admin", adminRoute);

app.get("/",(req,res)=>{
res.send("hello");
})

app.listen(PORT, () => {
  console.log(`Server is running at http:localhost:${PORT}`);
});
