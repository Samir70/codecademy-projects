const express = require("express");
const { v4: uuidv4 } = require("uuid");
const router = express.Router();
const ALL_RESTAURANTS = require("./restaurants").restaurants;

/**
 * A list of starred restaurants.
 * In a "real" application, this data would be maintained in a database.
 */
let STARRED_RESTAURANTS = [
  {
    id: "a7272cd9-26fb-44b5-8d53-9781f55175a1",
    restaurantId: "869c848c-7a58-4ed6-ab88-72ee2e8e677c",
    comment: "Best pho in NYC",
  },
  {
    id: "8df59b21-2152-4f9b-9200-95c19aa88226",
    restaurantId: "e8036613-4b72-46f6-ab5e-edd2fc7c4fe4",
    comment: "Their lunch special is the best!",
  },
];

/**
 * Feature 6: Getting the list of all starred restaurants.
 */
router.get("/", (req, res) => {
  /**
   * We need to join our starred data with the all restaurants data to get the names.
   * Normally this join would happen in the database.
   */
  const joinedStarredRestaurants = STARRED_RESTAURANTS.map(
    (starredRestaurant) => {
      const restaurant = ALL_RESTAURANTS.find(
        (restaurant) => restaurant.id === starredRestaurant.restaurantId
      );

      return {
        id: starredRestaurant.id,
        comment: starredRestaurant.comment,
        name: restaurant.name,
      };
    }
  );

  res.json(joinedStarredRestaurants);
});

/**
 * Feature 7: Getting a specific starred restaurant.
 */

router.get("/:id", (req, res) => {
  const { id } = req.params;

  // Find the restaurant with the matching id.
  const restaurant = ALL_RESTAURANTS.find((restaurant) => restaurant.id === id);
  const starredRestaurant = STARRED_RESTAURANTS.filter((restaurant) => restaurant.restaurantId === id);


  // If the restaurant doesn't exist, let the client know.
  if (!restaurant || !starredRestaurant.length === 0) {
    res.sendStatus(404);
    return;
  }
  restaurant.comment = starredRestaurant[0].comment
  res.json(restaurant);
});

/**
 * Feature 8: Adding to your list of starred restaurants.
 */

router.post("/", (req, res) => {
  const { body } = req;
  let { id, comment } = body;

  // Generate a unique ID for the new restaurant.
  const newStarredId = uuidv4();
  if (comment === undefined) { comment = 'No comment given' }
  const restaurant = ALL_RESTAURANTS.find((restaurant) => restaurant.id === id);

  const newStarredRestaurant = {
    id: newStarredId,
    restaurantId: id,
    name: restaurant.name,
    comment: comment
  }

  // Add the new restaurant to the list of restaurants.
  STARRED_RESTAURANTS.push(newStarredRestaurant)

  res.json(newStarredRestaurant);
});

/**
 * Feature 9: Deleting from your list of starred restaurants.
 */
router.delete("/:id", (req, res) => {
  const { id } = req.params;

  STARRED_RESTAURANTS = STARRED_RESTAURANTS.filter(r => r.id !== id)

  res.json(STARRED_RESTAURANTS);
});

/**
 * Feature 10: Updating your comment of a starred restaurant.
 */

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { newComment } = req.body;

  let out = {}
  for (let r of STARRED_RESTAURANTS) {
    if (r.id === id) {
      r.comment = newComment
      out = {...r}
    }
  }

  res.json(out);
});

module.exports = router;