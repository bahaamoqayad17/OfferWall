const express = require("express");
const MessagesController = require("../Controllers/MessagesController");

const router = express.Router();

router.route("/").get(MessagesController.index).post(MessagesController.create);

router
  .route("/:id")
  .get(MessagesController.show)
  .put(MessagesController.update)
  .delete(MessagesController.delete);

module.exports = router;
