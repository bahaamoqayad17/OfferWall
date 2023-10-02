const factory = require("./FactoryHandler");
const Messages = require("../Models/Messages");

exports.index = factory.index(Messages);
exports.create = factory.create(Messages);
exports.show = factory.show(Messages);
exports.update = factory.update(Messages);
exports.delete = factory.delete(Messages);
