const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth.middleware");
const taskCtrl = require("../controllers/task.controller");

// MANAGER
router.post("/", auth, taskCtrl.createTask);

// USER
router.get("/my", auth, taskCtrl.getMyTasks);
router.put("/:id", auth, taskCtrl.updateTaskStatus);

module.exports = router;
