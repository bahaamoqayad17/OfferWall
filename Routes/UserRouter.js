const express = require("express");
const AuthController = require("../Controllers/AuthController");
const UserController = require("../Controllers/UserController");

const router = express.Router();

router.post("/register", AuthController.register);
router.post("/login", AuthController.login);

router.use(AuthController.protect);

router.put("/updateMe", UserController.updateMe);

router.use(AuthController.restrictTo("Admin"));

router.route("/").get(UserController.index).post(UserController.create);

router
  .route("/:id")
  .get(UserController.show)
  .put(UserController.update)
  .delete(UserController.delete);

module.exports = router;
