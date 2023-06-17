// dima voronov 321241119, ronen vishnivetsky 318552007
const express = require('express');
const router = express.Router();

const { getAboutDetails } = require('../controllers/aboutController');

router.get('/', getAboutDetails);

module.exports = router;
