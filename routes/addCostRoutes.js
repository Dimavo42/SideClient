// dima voronov 321241119, ronen vishnivetsky 318552007
const express = require('express');
const router = express.Router();

const { postAddCost } = require('../controllers/addCostController');

router.post('/', postAddCost);

module.exports = router;
