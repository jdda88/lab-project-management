const express = require("express");
const morgan = require("morgan");
const logger = morgan("dev");
const mongoose = require("mongoose");
const connectDB = require("./config/mongoose.config.js")
const projectRouter = require("./routes/project.routes.js")
const taskRouter = require("./routes/task.routes.js")
require("dotenv").config();

const app = express();

app.use(logger);
app.use(express.json());
app.use("/projects", projectRouter);
app.use("/tasks", taskRouter);

connectDB();







app.listen(process.env.PORT, () =>
  console.log("server is up on port ->", process.env.PORT)
);

