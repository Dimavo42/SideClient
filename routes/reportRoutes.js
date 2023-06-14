const express = require('express');
const router = express.Router();

const { getReport } = require('../controllers/reportController');

router.get('/report', getReport);

module.exports = router;
