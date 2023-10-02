const express = require("express");
const PaymentController = require("../Controllers/PaymentController");

const router = express.Router();

router.route("/").get(PaymentController.index).post(PaymentController.create);

router
  .route("/:id")
  .get(PaymentController.show)
  .put(PaymentController.update)
  .delete(PaymentController.delete);

module.exports = router;
