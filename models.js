const db = require("./db/connection");

exports.fetchRestaurants = () => {
  return db.query("SELECT * FROM restaurants;").then((result) => {
    return result.rows;
  });
};

exports.sendRestaurant = (restaurant) => {
  const { restaurant_name, area_id, cuisine, website } = restaurant;
  return db
    .query(
      "INSERT INTO restaurants (restaurant_name, area_id, cuisine, website) VALUES ($1, $2, $3, $4) RETURNING *;",
      [restaurant_name, area_id, cuisine, website]
    )
    .then((result) => {
      console.log(result);
      return result.rows[0];
    });
};

exports.removeRestaurant = (id) => {
  return db
    .query("DELETE FROM restaurants WHERE restaurant_id = $1", [id])
    .then(() => {
      return {};
    });
};
