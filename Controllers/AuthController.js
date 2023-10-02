const { promisify } = require("util");
const jwt = require("jsonwebtoken");
const User = require("../Models/User");
const CatchAsync = require("../utils/CatchAsync");
const AppError = require("../utils/AppError");

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const createSendToken = (user, statusCode, req, res) => {
  const token = signToken(user._id);

  user.password = undefined;

  res.status(statusCode).json({
    status: "success",
    token,
    user,
  });
};

exports.register = CatchAsync(async (req, res, next) => {
  const user = await User.create({
    name: req.body.name,
    email: req.body.email,
    app_url: req.body.app_url,
    skype_id: req.body.skype_id,
    mobile_number: req.body.mobile_number,
    company_type: req.body.company_type,
    register_ip: req.body.register_ip,
    cover_letter: req.body.cover_letter,
    country: req.body.country,
    company_name: req.body.company_name,
    company_id: req.body.company_id,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm,
  });
  createSendToken(user, 201, req, res);
});

exports.login = CatchAsync(async (req, res, next) => {
  const { email, password, last_login_ip } = req.body;

  if (!email || !password) {
    return next(new AppError("Please Enter Your Email and Password", 400));
  }

  const user = await User.findOneAndUpdate(
    { email },
    { last_login_ip: last_login_ip }
  ).select("+password");

  if (!user || !(await user.correctPassword(password, user.password))) {
    return next(new AppError("Incorrect Email Or Password", 401));
  }

  if (user.status === "3") {
    return next(new AppError("Your Account is Suspended", 401));
  }

  if (user.status === "2") {
    return next(
      new AppError(
        "Your Account is Rejected, Check Your Email To Know Why",
        401
      )
    );
  }

  if (user.status === "0") {
    return next(new AppError("Your Account is Not Activated Yet", 401));
  }

  createSendToken(user, 200, req, res);
});

exports.protect = CatchAsync(async (req, res, next) => {
  // 1) Getting token and check of it's there
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }
  if (!token) {
    return next(
      new AppError("You are not logged in! Please log in to get access", 401)
    );
  }

  // 2) Verification token
  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

  // 3) Check if user still exists
  const currentUser = await User.findById(decoded.id);
  if (!currentUser) {
    return next(
      new AppError(
        "The user belonging to this token does no longer exist.",
        401
      )
    );
  }

  // GRANT ACCESS TO PROTECTED ROUTE
  req.user = currentUser;
  res.locals.user = currentUser;
  next();
});
exports.restrictTo = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new AppError("You do not have permission to perform this action", 403)
      );
    }
    next();
  };
};
