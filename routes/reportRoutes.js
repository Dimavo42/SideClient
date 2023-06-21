// dima voronov 321241119, ronen vishnivetsky 318552007
// report route
const express = require('express');
const router = express.Router();

const { getReport } = require('../controllers/reportController');

router.get('/', getReport);

module.exports = router;
