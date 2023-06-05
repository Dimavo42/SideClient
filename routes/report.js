// Import dependencies
const express = require('express');
const router = express.Router();
const Cost = require('../schemes/costs');
const Report = require('../schemes/report');


router.get('/report', async function (req, res){
    const { user_id, month, year } = req.query;
  
    // Check if all required parameters are provided
    if (!user_id || !month || !year) {
      return res.status(400).json({ error: 'Missing parameters' });
    }
    const costs = await Cost.find({ user_id, year, month }).lean();
    // Check if costs is empty
    if(costs.length === 0 ){
      return res.status(404).json({ error: 'Cannot find user' });
    }
    // Generate the report object with empty arrays for all categories
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
          other: []
        }
      });
    }
    else{
      // If the report exists, return it without updating if there are no new costs
      const existingCosts = report.categories;
      const newCosts = await Cost.find({ user_id, month, year }).lean();
      if (existingCosts.length === newCosts.length) {
        return res.json(report.categories);
      }
    }

    // Clear the existing category arrays in the report
    Object.keys(report.categories).forEach(category => {
      report.categories[category] = [];
    });

    // Fill the arrays with new reports
    costs.forEach(cost => {
      report.categories[cost.category].push({
        day: cost.day,
        description: cost.description,
        sum: cost.sum
      });
    });
    // Save the report
    await report.save();
    res.json(report.categories);

});

module.exports = router;


