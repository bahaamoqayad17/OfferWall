const mongoose = require("mongoose");

const Schema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "User is required"],
    },
    balance: {
      type: Number,
      default: 0,
    },
    earnings_mtd: Number,
    reversals_mtd: Number,
  },
  { timestamps: true }
);

const Wallet = mongoose.model("Wallet", Schema);

module.exports = Wallet;
