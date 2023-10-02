const mongoose = require("mongoose");

const Schema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "User is required"],
    },
    status: {
      type: Number, // 0:Pending , 1:Approved , 2:Rejected
      default: 0,
    },
    amount: {
      type: Number,
      required: [true, "Amount is required"],
    },
  },
  { timestamps: true }
);

const Payment = mongoose.model("Payment", Schema);

module.exports = Payment;
