
const express = require('express');
const router = express.Router();
const User =require('../schemes/users ');
const Cost = require('../schemes/costs');


router.get('/report', async function (req, res){
    const { user_id, month, year } = req.query;
  
    // Check if all required parameters are provided
    if (!user_id || !month || !year) {
      return res.status(400).json({ error: 'Missing parameters' });
    }
    const costs = await Cost.find({ user_id, year, month }).lean();
    // Generate the report object with empty arrays for all categories
    const report = {
        food: [],
        health: [],
        housing: [],
        sport: [],
        education: [],
        transportation: [],
        other: []
      };

    // Populate the report object with cost items
    costs.forEach(cost => {
        report[cost.category].push({
          day: cost.day,
          description: cost.description,
          sum: cost.sum
        });
      });
      res.json(report);

});

module.exports = router;


