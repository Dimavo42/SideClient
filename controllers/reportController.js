const Report = require('../schemas/reportSchema');
const User = require('../schemas/userSchema');
const Cost = require('../schemas/costSchema');

const getReport = async (req, res) => {
  console.log('report');
  const { user_id, month, year } = req.query;

  console.log(user_id, month, year);

  // Check if all required parameters are provided
  if (!user_id || !month || !year) {
    return res.status(400).json({ error: 'Missing parameters' });
  }
  const user = await User.findOne({ id: user_id });
  // Check if is user is empty
  if (!user) {
    return res.status(404).json({ error: 'Cannot find user' });
  }
  // Find a report if not
  let report = await Report.findOne({ user_id, month, year });
  console.log('report', report);
  if (!report) {
    // Create a new report if it doesn't exist
    report = new Report({
      user_id,
      month,
      year,
      categories: {
        food: [],
        health: [],
        housing: [],
        sport: [],
        education: [],
        transportation: [],
        other: [],
      },
    });

    await report.save();
  } else {
    // If the report exists, return it without updating if there are no new costs
    // const existingReport = report.categories;
    const newCost = await Cost.find({ user_id, month, year });
    //todo fix the compare
    // if (existingReport.length === newCost.length) {
    //   return res.json(report.categories);
    // } else {
    // Clear the existing category arrays in the report not equal have update
    Object.keys(report.categories).forEach((category) => {
      report.categories[category] = [];
    });
    // Fill the arrays with new reports
    newCost.forEach((cost) => {
      report.categories[cost.category].push({
        day: cost.day,
        description: cost.description,
        sum: cost.sum,
      });
    });
    // Save the report
    await report.save();
  }
  // };

  res.json(report.categories);
  //Send the report
};

module.exports = { getReport };
