const express = require("express");
const app = express();
const {
  getApi,
  getRestaurants,
  postRestaurant,
  deleteRestaurant,
} = require("./controllers");
app.use(express.json());

app.get("/api", getApi);
app.get("/api/restaurants", getRestaurants);
app.post("/api/restaurants", postRestaurant);
app.delete("/api/restaurants/:restaurant_id", deleteRestaurant);

app.use((err, req, res, next) => {
  if (err.code === "22P02" || err.code === "23502") {
    res.status(400).send({ msg: "Bad request" });
  } else if (err.code === "23503") {
    res.status(404).send({ msg: "Not found" });
  } else next(err);
});
//not tested. steal from 8-be-rated-restaurants

app.use((err, req, res, next) => {
  if (err.msg && err.status) {
    res.status(err.status).send({ msg: err.msg });
  } else next(err);
});
//not tested. steal from 8-be-rated-restaurants

//add /* error handler. steal from 8-be-rated-restaurants

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send("Server Error!");
});

module.exports = app;
