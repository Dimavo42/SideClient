// dima voronov 321241119, ronen vishnivetsky 318552007
const mongoes = require('mongoose');
const Schema = mongoes.Schema;

const userSchema = new Schema({
  id: {
    type: String,
  },
  first_name: {
    type: String,
  },
  last_name: {
    type: String,
  },
  birthday: {
    type: Date,
  },
});

const User = mongoes.model('User', userSchema);
module.exports = User;
