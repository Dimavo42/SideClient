const express = require('express');
const router = express.Router();

const { getAboutDetails } = require('../controllers/aboutController');

router.get('/about', getAboutDetails);

module.exports = router;
