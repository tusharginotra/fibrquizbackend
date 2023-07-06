const { getUserByEmail,createUser } = require("../services/user.service");
const {createQuiz, getQuizById} = require("../services/quiz.service")

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

const getQuizes = async (req,res)=>{

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
            const body = req.body
        const email = body.email
        const data = await getUserByEmail(email)
        const quizes = data.quizes;

        res.status(201).json({
            quizes
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


module.exports={getQuizes,createNewUser,makeNewQuiz}


