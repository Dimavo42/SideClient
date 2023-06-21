// dima voronov 321241119, ronen vishnivetsky 318552007
// handling incoming requests and returning responses to the client
const Report = require('../schemas/reportSchema');
const User = require('../schemas/userSchema');
const Cost = require('../schemas/costSchema');

const getReport = async (req, res) => {
  const { user_id, month, year } = req.query;

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
  const newCosts = await Cost.find({ user_id, month, year });
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
  }
  // If no return the old report and dont create a new one casuse nothing changed in the report 
  if (report.length !== newCosts.length) {
    // Clear the existing category arrays in the report
    Object.keys(report.categories).forEach((category) => {
      report.categories[category] = [];
    });

    // Fill the arrays with new costs
    newCosts.forEach((cost) => {
      report.categories[cost.category].push({
        day: cost.day,
        description: cost.description,
        sum: cost.sum,
      });
    });

    // Save the report
    await report.save();
  }
  res.json(report.categories);
};

module.exports = { getReport };
