const mongoose = require("mongoose");

const Schema = mongoose.Schema(
  {
    api_key: String,
    payment_terms: String, //(Net-15, Net-30, Net-60)d
    profit_percentage: Number,
    meta_description: String,
    meta_keywords: String,
    meta_title: String,
    image: {
      type: String,
      transform: function (image) {
        return `${process.env.BASE_URL}${image}`;
      },
    },
  },
  { timestamps: true }
);

const Setting = mongoose.model("Setting", Schema);

module.exports = Setting;
