const { Quiz } = require("../models/quiz.model");
const { UserList } = require("../models/userList.model")
const createQuiz = async(body)=>{
    try{
    const quiz = body.quiz
    
    const result = await Quiz.create(quiz)
    const id = result._id
    const data = await UserList.create({_id : id})

    return result;
    
    }
    catch(err)
    {
        throw err
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
    if(! await getQuizById(id))
    {
        return {message : "quiz does not exist"}
    }
    const data = await UserList.findOne({"_id" : id});

   

    if( data)
    {
        const list = data.list
     
        for( let i=0;i<list.length;i++)
        {
            if(list[i].email == email)
            {
                
                return {"message" : "you have already given the quiz"};
            }
        }
      
        list.push({"name":username,"email":email,"score":score})
        
        data.list = list;
      
        try{
        const result = await data.save()
       
        }catch(err)
        {
            console.log(err)
            throw err
        }
        
        return data;
    }
    else
    {

        const userlist = await UserList.create({_id : id}).exec()
        
        const list = userlist.list
        
        list.push({"name":username,"email":email,"score":score})

        userlist.list = list;
        await userlist.save()
        return userlist;
    }
    
}

const getUsersOfQuiz = async(id)=>
{
    try{
        const data = await UserList.findOne({_id : id})
        // console.log(data)
        return data.list
    }catch(err){
        throw err;
    }
}
module.exports = {createQuiz,getQuizById,addScore,getQuizByEmail,getUsersOfQuiz}