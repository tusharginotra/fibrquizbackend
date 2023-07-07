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


    }
)
const User = mongoose.model('User',userSchema)
 module.exports = {User};