const mongoose = require('mongoose')

const questionSchema = mongoose.Schema(
    {
        id : String,
        question: {
            type: String,
            required: true,
            trim: true,
          },
          choices: [{
            type: String,
            required : true,
          }],
          correctAnswer : 
          {
            type : String,
            required : true,
            trim : true,
          }

    }
)
const Question = mongoose.model('Question',questionSchema)
 module.exports.Question= Question;
 module.exports.questionSchema = questionSchema