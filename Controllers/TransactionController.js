const factory = require("./FactoryHandler");
const Transaction = require("../Models/Transaction");

exports.index = factory.index(Transaction);
exports.create = factory.create(Transaction);
exports.show = factory.show(Transaction);
exports.update = factory.update(Transaction);
exports.delete = factory.delete(Transaction);
