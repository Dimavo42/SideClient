const Report = require('../schemas/report');

const getReport = async (req, res) => {
  console.log('report');
  const { user_id, month, year } = req.query;

  // Check if all required parameters are provided
  if (!user_id || !month || !year) {
    return res.status(400).json({ error: 'Missing parameters' });
  }
  const user = await User.findOne({ id: user_id });
  // Check if is user is empty
  if (user.length === 0) {
    return res.status(404).json({ error: 'Cannot find user' });
  }
  // Find a report if not
  let report = await Report.findOne({ user_id, month, year });
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
  } else {
    // If the report exists, return it without updating if there are no new costs
    const existingReport = report.categories;
    const newReport = await Cost.find({ user_id, month, year }).lean();
    if (existingReport.length === newReport.length) {
      return res.json(report.categories);
    } else {
      // Clear the existing category arrays in the report not equal have update
      Object.keys(report.categories).forEach((category) => {
        report.categories[category] = [];
      });
      // Fill the arrays with new reports
      newReport.forEach((cost) => {
        report.categories[cost.category].push({
          day: cost.day,
          description: cost.description,
          sum: cost.sum,
        });
      });
      // Save the report
      await report.save();
    }
  }
  //Send the report
  res.json(report.categories);
};

module.exports = { getReport };
