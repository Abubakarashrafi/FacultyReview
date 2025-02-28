const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 4000 || process.env.PORT;

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors());
app.get("/", (req, res) => {
    res.send("hello");
})


const teacherRoute = require("./routes/teacher");

app.use("/teacher", teacherRoute);

const reviewRoute = require("./routes/review");
app.use("/review", reviewRoute);

const userRoute = require("./routes/user");
app.use("/user", userRoute);



app.listen(PORT, () => {
    console.log(`Server is running at http:localhost:${PORT}`);

})