const { findUserByEmail,createUser } = require("../services/user.service");

const getQuizes = async (req,res)=>{

    try{
        const body = req.body
        const data = await findUserByEmail(body.email)
        res.status(201).json({
            "user": data
              })
    }
    catch(err)
    {
        res.status(200).json({
            "message" : "error occured in user.controller.js in getQuizes function"
        })
    }
}

const createNewUser = async(req,res)=>{
    try{
        const body = req.body
        // console.log(body)
        const data = await createUser(body)
        // const data = null
        res.status(201).json({
            "user" : data,
            "message" : "user created, I got your request"
        })
    }
    catch(err)
    {
        res.status(200).json({
            "message" : "error occured in user.controller.js in createNewUser function",
            "err" : err
        })
    }
}
module.exports={getQuizes,createNewUser}


