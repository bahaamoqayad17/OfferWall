const factory = require("./FactoryHandler");
const Payment = require("../Models/Payment");

exports.index = factory.index(Payment);
exports.create = factory.create(Payment);
exports.show = factory.show(Payment);
exports.update = factory.update(Payment);
exports.delete = factory.delete(Payment);
