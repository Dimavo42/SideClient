const availableCategories = [
  'food',
  'health',
  'housing',
  'sport',
  'education',
  'transportation',
  'other',
];

const postAddCost = async (req, res) => {
  console.log('addCost');

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
    return res.status(400).json({ error: 'Missing parameters' });
  }

  // Check if the category is valid
  if (!availableCategories.includes(category)) {
    return res.status(400).json({ error: 'Invalid category' });
  }

  const user = await User.findOne({ id: user_id });
  // Check if is user is empty
  if (user.length === 0) {
    return res.status(404).json({ error: 'Cannot find user' });
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
};

module.exports = { postAddCost };
