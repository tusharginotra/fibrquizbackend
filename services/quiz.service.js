const { Quiz } = require("../models/quiz.model");
const { User } = require("../models/user.model");

const createQuiz = async(body)=>{
    try{
    const email = body.email
    const name = body.name
    const quiz = body.quiz
    
    const result = await Quiz.create(quiz)
    
    return result;
    
    }
    catch(err)
    {
        return err
    }

}
const getQuizById = async(id)=>{
    try{
        const quiz = await Quiz.findById(id);
        
        return quiz;

    }
    catch(err)
    {
        throw err;
    }

}
module.exports = {createQuiz,getQuizById}