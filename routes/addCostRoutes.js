// Import dependencies
const express = require('express');
const router = express.Router();

const { postAddCost } = require('../controllers/addCostController');

router.post('/addcost', postAddCost);

module.exports = router;
