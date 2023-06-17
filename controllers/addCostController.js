const User = require("../schemas/userSchema");
const Cost = require("../schemas/costSchema");
const { availableCategories } = require("../utils/availableCategories");

const postAddCost = async (req, res) => {
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

  const user = await User.findOne({ id: user_id });
  // Check if is user is empty
  if (!user) {
    return res.status(404).json({ error: "Cannot find user" });
  }
  // Try to find one and add it sum
  let existingCost = await Cost.findOne({
    user_id,
    year,
    month,
    day,
    description,
    category,
  });
  if (existingCost) {
    existingCost.sum += sum;
    await existingCost.save();
    res.json(existingCost);
  } else {
    // There is no cost with this parmaters then add newCost 
    const newCost = new Cost({ user_id, year, month, day, description, category, sum });
    newCost.save()
      .then(() => {
        res.json(newCost);
      })
      .catch((err) => {
        res.status(400).json({ error: `Could not save to DB: ${err.message}` });
      });
  }
};

module.exports = { postAddCost };
