const mongoes = require('mongoose');
const Schema = mongoes.Schema;




const UsersSchema = new Schema({
        id:{
                type:String
        },
        first_name: {
                type:String
        },
        last_name:{
                type:String
        },
        birthday:{
                type:Date
        }
        
});


const User = mongoes.model('users',UsersSchema);
module.exports = User;