const Project = require("../models/Project.js");

const router = require("express").Router();

// Get All
router.get("/", async (req, res) => {
  try {
    const projects = await Project.find().populate("tasks");
    res.json(projects);
  } catch (error) {
    console.log(error);
    res.json(error);
  }
});

// Get Single One
router.get("/project/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const project = await Project.findById(id);
  } catch (error) {
    console.log(error);
    res.json(error);
  }
});

// Create
router.post("/", async (req, res) => {
  try {
    const { title, description } = req.body;
    const created = await Project.create({ title, description });
    res.status(201).json(created);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

// Edit
router.put("/project/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const projectEdited = await Project.findByIdAndUpdate(id, req.body, {
      new: true,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

// Delete
router.delete("/project/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await Project.findById(id);

    res.json({ message: "Project was delete succesfully!!" });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

module.exports = router;
