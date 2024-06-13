const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    title: {type: String},
    status: {type: String},
    project: {type: mongoose.Schema.Types.ObjectId, ref: "Project"}

});


module.exports = Task = mongoose.model("Task", taskSchema);