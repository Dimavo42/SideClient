
const express = require('express');
const router = express.Router();
const User =require('../schemes/users ');


router.get('/report', function (req, res){
    const { user_id, month, year } = req.query;
  
    // Check if all required parameters are provided
    if (!user_id || !month || !year) {
      return res.status(400).json({ error: 'Missing parameters' });
    }
});
