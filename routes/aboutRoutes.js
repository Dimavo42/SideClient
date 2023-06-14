const express = require('express');
const router = express.Router();

const { getAboutDetails } = require('../controllers/aboutController');

router.get('/', getAboutDetails);

module.exports = router;
