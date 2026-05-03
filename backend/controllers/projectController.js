const Project = require("../models/Project");

// Create Project (Admin only)
exports.createProject = async (req, res) => {
  const { name, description, members } = req.body;

  const project = await Project.create({
    name,
    description,
    owner: req.user._id,
    members
  });

  res.json(project);
};

// Get all projects of user
exports.getProjects = async (req, res) => {
  const projects = await Project.find({
    $or: [
      { owner: req.user._id },
      { members: req.user._id }
    ]
  }).populate("members", "name email");

  res.json(projects);
};