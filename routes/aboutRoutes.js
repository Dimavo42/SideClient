// dima voronov 321241119, ronen vishnivetsky 318552007
// about route 
const express = require('express');
const router = express.Router();

const { getAboutDetails } = require('../controllers/aboutController');

router.get('/', getAboutDetails);

module.exports = router;
