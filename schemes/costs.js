const mongoes = require('mongoose');
const Schema = mongoes.Schema;


const addCost =  new Schema({
    user_id:{
        type:String,
        required: true
    },
    year:{
        type:Number,
        required: true
    },
    month:{
        type:Number,
        required: true
    },
    day:{
        type:Number,
        required: true
    },
    id:{
        type:String,
        required: true
    },
    category: {
        type: String,
        enum: ['food', 'utilities', 'transportation', 'entertainment'],
        required: true
      },
    description:{
        type:String,
        required: true
    },
    category:{
        type:String,
        required: true
    },
    sum:{
        type:Number,
        required: true
    }

});

const AddCost = mongoes.model('AddCost',addCost);
module.exports = AddCost;
