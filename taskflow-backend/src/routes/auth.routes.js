const router = require("express").Router();
const auth = require("../middleware/auth.middleware");
const role = require("../middleware/role.middleware");
const ctrl = require("../controllers/auth.controller");

/*router.post("/login", ctrl.login);
router.post("/logout", auth, ctrl.logout);
router.post("/register", auth, role("ADMIN"), ctrl.registerUser); */

router.post("/login", ctrl.login);
router.post("/logout", auth, ctrl.logout);
router.post("/register", auth, role("ADMIN"), ctrl.registerUser);

module.exports = router;

