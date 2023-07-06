const { User } = require("../models/user.model");

const findUserByEmail = async (email)=>{
    try{
        const result = await User.findOne({"email": email})
        return result;
    }
    catch(err)
    {
        throw err;
    }
}
const createUser = async (body)=>{
    try{
        // console.log(user)
        if( await User.findOne({email : body.email}))
        {
            const user = await User.findOne({email : body.email})
            const quiz = body.quiz
            const quizes = user.quizes;
            quizes.push(quiz);
            // console.log("quizpushed")
            user.quizes = quizes
            await user.save()
            console.log("not saved")
            data = await User.findOne({email: body.email})
            return data
            // throw new ApiError(httpStatus.OK, "Email already taken")
        }
        else
        {
            // console.log("inside else",user)
            console.log("inside else")
            const data = await User.create({...user,});
            data.save()
            // console.log(data)
            return data
        }
    }
    catch(err)
    {
        console.log("inside catch")
        throw err;
    }
}

module.exports = {findUserByEmail,createUser}