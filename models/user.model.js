const mongoose = require('mongoose');
const { QuizSchema } = require('./quiz.model');

const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
          },
          email: {
      
            type: String,
            required : true,
            trim : true,
            lowercase: true,
            unique: true,
          },
          quizes : [String]
          ,
          userlist :
          [
            {
                name : String,
                email : String,
                score : Number
            }
          ]


    }
)
const User = mongoose.model('User',userSchema)
 module.exports = {User};