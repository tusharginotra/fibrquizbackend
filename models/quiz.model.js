const mongoose = require("mongoose");
const { questionSchema } = require("./question.model");

const QuizSchema = mongoose.Schema(
    {
        creator : {
            type : String,
            required : true,
        },
        quizName : {
            type: String,
            required : true
         },
        "questions" : [ questionSchema]
    }
)
const Quiz = mongoose.model('Quiz',QuizSchema)
 module.exports.Quiz = Quiz;
 module.exports.QuizSchema = QuizSchema