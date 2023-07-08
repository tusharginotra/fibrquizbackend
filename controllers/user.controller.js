const { createUser } = require("../services/user.service");
const {getQuizByEmail,createQuiz, getQuizById, addScore , getUsersOfQuiz} = require("../services/quiz.service")

const makeNewQuiz = async(req,res)=>{
    try{
        const body = req.body
        const result = await createQuiz(body)
        
        res.status(201).json({result,message : "quiz created"})
    }
    catch(err)
    {
        res.status(400).json({
            message : err
        })
    }
};

const createNewUser = async(req,res)=>{
    try{
        const body = req.body
        
        const data = await createUser(body)
        res.status(201).json({
            "user" : data,
            "message" : "user created"
        })
    }
    catch(err)
    {
        res.status(400).json({
            "message" : "error occured in user.controller.js in createNewUser function",
            "err" : err
        })
    }
};

const getQuizesById = async (req,res)=>{
    try{
        const id = req.params.id;
        if( id)
        {
            const quiz = await getQuizById(id);
        res.status(201).json({
            quiz,message:"found quiz"
              })
        }
        else
        {
        res.status(201).json({
            "message":"please give id"
              })

        }
            }
    catch(err)
    {
        res.status(400).json({
            "message" : err
        })
    }
}
const getQuizesByEmail = async (req,res)=>{
    try{
        const email = req.params.email;
        if( email)
        {
            const quiz = await getQuizByEmail(email);
        res.status(201).json({
            quiz,message:"found quiz"
              })
        }
        else
        {
            res.status(201).json({
            "message": "Please give email in params"
              })

        }
            }
    catch(err)
    {
        res.status(400).json({
            "message" : err
        })
    }
}
const giveQuiz = async(req,res)=>
{
    try
    {
        const body = req.body
        const {id,name,email,score} = body
        
        const result = await addScore(id,name,email,score)
        res.status(200).json({
            result ,message :"your score has been submitted"
        })
    }
    catch(err)
    {
        res.status(400).json({
            "message" : err
        })
    }
}
const getUserList = async (req,res)=>{
    try
    {
        const id = req.params.id
        
        const list = await getUsersOfQuiz(id)
        res.status(200).json({
            list
        })
    }
    catch(err)
    {
        res.status(400).json({
            "message" : err
        })
    }
}
module.exports={getQuizesById,getQuizesByEmail,createNewUser,makeNewQuiz,giveQuiz,getUserList}


