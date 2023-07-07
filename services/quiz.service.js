const { Quiz } = require("../models/quiz.model");
const { UserList } = require("../models/userList.model")
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
const getQuizByEmail = async(email)=>{
    try{
        
        const quizes = await Quiz.find({creator : email})
        return quizes;
    }
    catch(err)
    {
        throw err
    }
}


const addScore = async (id,username,email,score)=>
{
    // console.log(id,username,email,score)   
    const data = await UserList.findOne({"_id" : id})
    // console.log(data)
    if( data)
    {
        const list = data.list
        for( let i=0;i<list.length;i++)
        {
            if(list[i].email == email)
            {
                
                return {"message" : "you have already given the quiz"}
            }
        }
        list.push({"name":username,"email":email,"score":score})
        
        data.list = list;
        await data.save()
        return data;
    }
    else
    {
        console.log("reached")
        const userlist = await UserList.create({_id : id}).exec()
        // console.log(userlist)
        
        // return userlist
        const list = userlist.list
        for( let i=0;i<list.length;i++)
        {
            if(list[i].email == email)
            {
                return {"message" : "you have already given the quiz"}
            }
        }
        list.push({"name":username,"email":email,"score":score})
        userlist.list = list;
        await userlist.save()
        return userlist;
    }
    
}
module.exports = {createQuiz,getQuizById,addScore,getQuizByEmail}