const mongoes = require('mongoose');
const Schema = mongoes.Schema;


const addCost =  new Schema({
    user_id:{
        type:String,
    },
    year:{
        type:Number,
    },
    month:{
        type:Number,
    },
    day:{
        type:Number,
    },
    id:{
        type:String,
    },
    category: {
        type: String,
      },
    description:{
        type:String,
    },
    category:{
        type:String,
    },
    sum:{
        type:Number,
    }

});

const AddCost = mongoes.model('AddCost',addCost);
module.exports = AddCost;
