// dima voronov 321241119, ronen vishnivetsky 318552007
const mongoes = require('mongoose');
const Schema = mongoes.Schema;

// cost schema 
const costSchema = new Schema({
  user_id: {
    type: String,
  },
  year: {
    type: Number,
  },
  month: {
    type: Number,
  },
  day: {
    type: Number,
  },
  id: {
    type: String,
  },
  category: {
    type: String,
  },
  description: {
    type: String,
  },
  category: {
    type: String,
  },
  sum: {
    type: Number,
  },
});

const Cost = mongoes.model('Cost', costSchema);
module.exports = Cost;
