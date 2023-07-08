const mongoose = require("mongoose");

const userListSchema = mongoose.Schema({
    _id : {
        type : String,
        required : true,
        trim : true
    },
    list : [
        {
            name : String,
            email : {
               type : String,
               required : true
            }, 
            score : Number
            
        }
    ]
    },
    {
    _id : false
    }
)
const UserList = mongoose.model('userList',userListSchema)
 module.exports = {UserList};