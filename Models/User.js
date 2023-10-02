const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const Schema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is Required"],
  },
  email: {
    type: String,
    required: [true, "Email is Required"],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Valid Email is Required"],
  },
  mobile_number: {
    type: String,
    unique: true,
    required: [true, "Mobile Number is Required"],
  },
  app_url: {
    type: String,
    required: [true, "App Url is Required"],
  },
  country: String,
  company_type: String,
  company_name: {
    type: String,
    required: [
      function () {
        return this.company_type === "Company";
      },
      "Company Name is Required",
    ],
  },
  company_id: {
    type: String,
    required: [
      function () {
        return this.company_type === "Company";
      },
      "Company Tax ID is Required",
    ],
  },
  cover_letter: {
    type: String,
    required: [true, "Fraud Prevention is Required"],
  },
  skype_id: {
    type: String,
    required: [true, "Skype ID is Required"],
  },
  role: {
    type: String,
    default: "user",
  },
  password: {
    type: String,
    required: [true, "Password is Required"],
    minlength: 8,
    select: false,
  },
  payment_method: String,
  payment_email: String,
  status: {
    type: String, // 0:Pending , 1:Approved , 2:Rejected , 3:Suspend
    default: "0",
  },
  passwordConfirm: {
    type: String,
    required: [true, "Confirm Passrword is Required"],
    validate: {
      validator: function (el) {
        return el === this.password;
      },
      message: "Passwords are not the same!",
    },
  },
  register_ip: String,
  last_login_ip: String,
  passwordChangedAt: Date,
  passwordResetToken: String,
  passwordResetExpires: Date,
});
Schema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 12);

  this.passwordConfirm = undefined;
  next();
});

Schema.pre("save", function (next) {
  if (!this.isModified("password") || this.isNew) return next();

  this.passwordChangedAt = Date.now() - 1000;
  next();
});

Schema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

const User = mongoose.model("User", Schema);

module.exports = User;
