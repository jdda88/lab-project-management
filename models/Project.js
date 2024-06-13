const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: { type: String},
    tasks:[{type: mongoose.Schema.Types.ObjectId, ref: "Task"}]


});



module.exports = Project = mongoose.model("Project", projectSchema);