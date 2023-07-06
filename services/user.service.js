const { get } = require("mongoose");
const { User } = require("../models/user.model");
const {createQuiz}= require("../services/quiz.service");


const getUserByEmail = async function (email){
    try{
        console.log(email)
        const result = await User.findOne({"email": email})
        console.log(result)
        return result;
    }
    catch(err)
    {
        throw err;
    }
};

const addQuiz = async( id,email)=>
{
    const user = await getUserByEmail(email)
    const quizes = user.quizes
    quizes.push(id)
    user.quizes = quizes
    await user.save()
    return user;
}

const createUser = async (body)=>{
    try{
        if( await User.findOne({email : body.email}))
        {   
            const result = await createQuiz(body);
            const id = result._id;
            
            const data = await addQuiz(id,body.email)
            return data;

        }
        else
        {
            const result = await createQuiz(body)
            const id = result._id
           
            const data = await User.create({name : body.name , email : body.email});
            const quizes = data.quizes
            quizes.push(id)
            data.quizes = quizes
            await data.save()
            
            return data
        }
    }
    catch(err)
    {
        throw err;
    }
};


module.exports = { getUserByEmail ,createUser};