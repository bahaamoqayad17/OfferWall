const mongoose = require("mongoose");

const Schema = mongoose.Schema(
  {
    app: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "App",
      required: [true, "App is required"],
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "User is required"],
    },
    payout: {
      type: Number,
    },
    campaign_name: {
      type: String,
    },
    campaign_id: {
      type: String,
    },
    type: {
      type: Number, // 0:Perfomance , 1:Reversal
    },
    ip_address: String,
  },
  { timestamps: true }
);

const Transaction = mongoose.model("Transaction", Schema);

module.exports = Transaction;
