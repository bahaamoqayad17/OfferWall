const express = require("express");
const AppController = require("../Controllers/AppController");
const AuthController = require("../Controllers/AuthController");

const router = express.Router();

router.use(AuthController.protect);

router.route("/offers").get(AppController.offers);
router.route("/surveys").get(AppController.surveys);
router.route("/myApps").get(AppController.myApps);

router.route("/").get(AppController.index).post(AppController.create);

router
  .route("/:id")
  .get(AppController.show)
  .put(AppController.update)
  .delete(AppController.delete);

module.exports = router;
