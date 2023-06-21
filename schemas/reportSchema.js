// dima voronov 321241119, ronen vishnivetsky 318552007
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// report schema 
const reportSchema = new Schema({
  user_id: {
    type: String,
  },
  month: {
    type: Number,
  },
  year: {
    type: Number,
  },
  categories: {
    food: [
      {
        day: Number,
        description: String,
        sum: Number,
      },
    ],
    health: [
      {
        day: Number,
        description: String,
        sum: Number,
      },
    ],
    housing: [
      {
        day: Number,
        description: String,
        sum: Number,
      },
    ],
    sport: [
      {
        day: Number,
        description: String,
        sum: Number,
      },
    ],
    education: [
      {
        day: Number,
        description: String,
        sum: Number,
      },
    ],
    transportation: [
      {
        day: Number,
        description: String,
        sum: Number,
      },
    ],
    other: [
      {
        day: Number,
        description: String,
        sum: Number,
      },
    ],
  },
});

const Report = mongoose.model('Report', reportSchema);

module.exports = Report;
