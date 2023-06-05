// Import dependencies
const express = require("express");
const router = express.Router();
const Cost = require("../schemes/costs");
const availableCategories = [
  "food",
  "health",
  "housing",
  "sport",
  "education",
  "transportation",
  "other",
];

router.post("addcost/", async function (req, res) {
  // Check if all required parameters are provided
  const { user_id, year, month, day, description, category, sum } = req.body;
  if (
    !user_id ||
    !year ||
    !month ||
    !day ||
    !description ||
    !category ||
    !sum
  ) {
    return res.status(400).json({ error: "Missing parameters" });
  }

  // Check if the category is valid
  if (!availableCategories.includes(category)) {
    return res.status(400).json({ error: "Invalid category" });
  }

  const newCost = new Cost({
    user_id,
    year,
    month,
    day,
    description,
    category,
    sum,
  });

  // Save the new cost item to the database
  newCost
    .save()
    .then(() => {
      // Return the added cost item as the response
      res.json(newCost);
    })
    .catch((err) => {
      //Return error couldnt save
      res.json({ error: `Could not save to DB: ${err.message}` });
    });
});

module.exports = router;
