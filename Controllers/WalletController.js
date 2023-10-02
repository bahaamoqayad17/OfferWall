const factory = require("./FactoryHandler");
const Wallet = require("../Models/Wallet");

exports.index = factory.index(Wallet);
exports.create = factory.create(Wallet);
exports.show = factory.show(Wallet);
exports.update = factory.update(Wallet);
exports.delete = factory.delete(Wallet);
