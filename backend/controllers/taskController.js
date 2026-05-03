const Task = require("../models/Task");

// Create Task
exports.createTask = async (req, res) => {
  const { title, assignedTo, project, deadline } = req.body;

  const task = await Task.create({
    title,
    assignedTo,
    project,
    deadline
  });

  res.json(task);
};

// Get tasks
exports.getTasks = async (req, res) => {
  const tasks = await Task.find()
    .populate("assignedTo", "name")
    .populate("project", "name");

  res.json(tasks);
};

// Update status
exports.updateTask = async (req, res) => {
  const { status } = req.body;

  const task = await Task.findById(req.params.id);

  if (!task) return res.status(404).json({ msg: "Task not found" });

  task.status = status;
  await task.save();

  res.json(task);
};