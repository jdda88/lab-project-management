const router = require("express").Router();
const Task = require("../models/Task.js");
const Project = require("../models/Project.js");
const { response } = require("express");

router.post("/", async (req, res) => {
  try {
    const { title, description, id } = req.body;

    const taskCreated = await Task.create({
      title,
      description,
      project: id,
    });
    const projectUpdated = await Project.findByIdAndUpdate(
      id,
      { $push: { tasks: taskCreated._id } },
      { new: true }
    );
    res.status(201).json({ response: { taskCreated, projectUpdated } });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

router.delete("/task/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await Task.findById(id);

    res.json({ message: "Task was delete succesfully!!" });
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
