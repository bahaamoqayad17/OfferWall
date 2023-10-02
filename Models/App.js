const mongoose = require("mongoose");

const Schema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    url: {
      type: String,
      required: [true, "Url is required"],
    },
    currency: String,
    currency_multiplyer: String,
    type: {
      type: Number, // 0:Survey , 1:Offer , 2:Both
      default: 0,
    },
    status: {
      type: Number, // 0:Pending , 1:Approved , 2:Rejected
      default: 2,
    },
    postback_url: String,
    direct_url: String,
    payout_type: {
      type: String,
      default: 0,
    },
    payout: Number,
    platform: {
      type: String,
      required: [true, "Platform is required"],
    },
    description: {
      type: String,
      required: [true, "Description is required"],
    },
    iframe: String,
    profit_percentage: {
      type: Number,
      default: 60,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "User is required"],
    },
  },
  { timestamps: true }
);

Schema.pre(/^find/, function (next) {
  this.populate({
    path: "user",
    select: "name email",
  });
  next();
});

const App = mongoose.model("App", Schema);

module.exports = App;
