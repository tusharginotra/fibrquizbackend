const { createUser } = require("../services/user.service");
const {getQuizByEmail,createQuiz, getQuizById, addScore} = require("../services/quiz.service")

const makeNewQuiz = async(req,res)=>{
    try{
        const body = req.body
        const result = await createQuiz(body)
        
        if(result==null)
        {
            result = await createNewUser(body)
        }
        res.status(201).json(result)
    }
    catch(err)
    {
        res.status(200).json({
            err : err
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
        res.status(200).json({
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
            quiz
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
        res.status(200).json({
            "message" : "error occured in user.controller.js in getQuizes function"
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
            quiz
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
        res.status(200).json({
            "message" : "error occured in user.controller.js in getQuizes function"
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
            result
        })
    }
    catch(err)
    {
        res.status(200).json({
            "message" : "error occured in user.controller.js in give Quiz function"
        })
    }
}

module.exports={getQuizesById,getQuizesByEmail,createNewUser,makeNewQuiz,giveQuiz}


