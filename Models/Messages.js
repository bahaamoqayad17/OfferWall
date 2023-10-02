const mongoose = require("mongoose");

const Schema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
    },
    message: {
      type: String,
      required: [true, "Message is required"],
    },
    subject: {
      type: String,
      required: [true, "Subject is required"],
    },
  },
  { timestamps: true }
);

const Messages = mongoose.model("Messages", Schema);

module.exports = Messages;
