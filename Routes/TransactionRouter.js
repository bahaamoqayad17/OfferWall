const express = require("express");
const TransactionController = require("../Controllers/TransactionController");

const router = express.Router();

router
  .route("/")
  .get(TransactionController.index)
  .post(TransactionController.create);

router
  .route("/:id")
  .get(TransactionController.show)
  .put(TransactionController.update)
  .delete(TransactionController.delete);

module.exports = router;
