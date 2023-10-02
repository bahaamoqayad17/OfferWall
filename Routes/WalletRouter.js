const express = require("express");
const WalletController = require("../Controllers/WalletController");

const router = express.Router();

router.route("/").get(WalletController.index).post(WalletController.create);

router
  .route("/:id")
  .get(WalletController.show)
  .put(WalletController.update)
  .delete(WalletController.delete);

module.exports = router;
