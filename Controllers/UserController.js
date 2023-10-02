const factory = require("./FactoryHandler");
const User = require("../Models/User");
const CatchAsync = require("../utils/CatchAsync");

exports.index = factory.index(User);
exports.create = factory.create(User);
exports.show = factory.show(User);
exports.update = factory.update(User);
exports.delete = factory.delete(User);

exports.updateMe = CatchAsync(async (req, res, next) => {
  const user = await User.findByIdAndUpdate(req.user._id, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(200).json({
    status: "success",
    data: user,
  });
});
