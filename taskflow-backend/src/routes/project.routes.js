const router = require("express").Router();
const auth = require("../middleware/auth.middleware");
const role = require("../middleware/role.middleware");
const ctrl = require("../controllers/project.controller");

router.post("/", auth, role("MANAGER"), ctrl.createProject);
module.exports = router;
