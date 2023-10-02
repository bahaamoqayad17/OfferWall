const factory = require("./FactoryHandler");
const App = require("../Models/App");
const CatchAsync = require("../utils/CatchAsync");
const { default: axios } = require("axios");

exports.index = factory.index(App);
exports.create = factory.create(App);
exports.show = factory.show(App);
exports.update = factory.update(App);
exports.delete = factory.delete(App);

exports.offers = CatchAsync(async (req, res, next) => {
  const countries = req.query.countries || "";
  const categories = req.query.categories || "";
  const payout_type = req.query.payout_type || "";

  const data = await axios.get(
    `https://api.adgatemedia.com/v3/offers?api_key=fe9bea6c174c6bc7fe4d43ffa70873fb&aff=124623&wall_code=naeYrGs&countries=${countries}&categories=${categories}`
  );

  const offerToro = await axios.get(
    `
    http://www.offertoro.com/api/?pubid=30311&appid=15130&secretkey=d9a6298e40963e41ed2dd1eeee4a4358&country=${countries}&format=json&payout_type=${payout_type}
    `
  );

  res.status(200).json({
    status: "success",
    data: data.data,
    offerToro: offerToro.data.response,
  });
});

exports.surveys = CatchAsync(async (req, res, next) => {
  const country = req.query.country || "";
  const data = await axios.get(
    `https://platform.opinionsample.com/api/publisher/v1/publisher_users/6129268d-01c1-433c-ba28-2a506922db5d/publisher_offers?&country_code=${country}`
  );

  res.status(200).json({
    status: "success",
    data: data.data,
  });
});

exports.myApps = CatchAsync(async (req, res, next) => {
  const data = await App.find({ user: req.user._id });

  res.status(200).json({
    status: "success",
    data,
  });
});
