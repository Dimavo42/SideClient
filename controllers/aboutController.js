const { developers } = require('../utils/developers');

const getAboutDetails = async (req, res) => {
  res.json(developers);
};

module.exports = { getAboutDetails };
