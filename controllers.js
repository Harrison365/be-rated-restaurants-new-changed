const {
  fetchRestaurants,
  sendRestaurant,
  removeRestaurant,
} = require("./models");

exports.getApi = (req, res) => {
  res.status(200).send({ message: "all ok!" });
};

exports.getRestaurants = (req, res) => {
  fetchRestaurants().then((restaurants) => {
    res.status(200).send({ restaurants: restaurants });
  });
};

exports.postRestaurant = (req, res) => {
  sendRestaurant(req.body).then((restaurant) => {
    res.status(201).send({ restaurant: restaurant });
  });
};

exports.deleteRestaurant = (req, res) => {
  const id = req.params.restaurant_id;
  removeRestaurant(id).then((emptyObj) => {
    res.status(204).send(emptyObj);
  });
};
