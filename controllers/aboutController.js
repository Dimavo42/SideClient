// dima voronov 321241119, ronen vishnivetsky 318552007
// handling incoming requests and returning responses to the client
const { developers } = require('../utils/developers');

const getAboutDetails = async (req, res) => {
  res.json(developers);
};

module.exports = { getAboutDetails };
