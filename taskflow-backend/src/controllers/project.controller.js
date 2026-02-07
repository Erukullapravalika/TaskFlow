const Project = require("../models/Project");

exports.createProject = async (req, res) => {
  const project = await Project.create({
    ...req.body,
    managerId: req.user.id,
  });
  res.status(201).json(project);
};
