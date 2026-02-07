const Task = require("../models/Task");

/**
 * MANAGER – Create task
 */
exports.createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ message: "Failed to create task" });
  }
};

/**
 * USER – Get own tasks
 */
exports.getMyTasks = async (req, res) => {
  try {
    const userId = req.user.id;

    const tasks = await Task.findAll({
      where: { assignedUserId: userId },
    });

    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch tasks" });
  }
};

/**
 * USER – Update task status
 */
exports.updateTaskStatus = async (req, res) => {
  try {
    const task = await Task.findByPk(req.params.id);

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    task.status = req.body.status;
    await task.save();

    res.json(task);
  } catch (error) {
    res.status(500).json({ message: "Failed to update task" });
  }
};
