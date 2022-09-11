const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');

require('dotenv').config();

const app = express();

app.use(express.static(path.join(__dirname + "/public")))
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true }
);

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})


const studentRouter = require("./routes/student_route")
const teacherRouter = require("./routes/teacher_route")
const testRouter = require("./routes/test_route")
const classRouter = require("./routes/class_route")

app.use("/api/students", studentRouter)
app.use("/api/teachers", teacherRouter)
app.use("/api/tests", testRouter)
app.use("/api/classes", classRouter)

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});