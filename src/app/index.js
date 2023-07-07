
const { default: mongoose } = require("mongoose");
const userRoutes = require("../../routes/user.routes")
const express = require("express");
const cors = require('cors')


const app = express();
app.use(cors())
const PORT = 8082
const URI = 'mongodb://127.0.0.1:27017/fibr'
app.use(express.json())

app.use("/",userRoutes);

app.use((req, res, next) => {
   res.status(404).json({"message":"NOT FOUND"})
});
mongoose.connect(URI)
.then((err,data)=>{
    console.log("Database is connected on ",URI)
    app.listen(PORT,()=>{
        console.log(" Backend is Listening on port", PORT)
        
    }) ;
})
.catch((err)=>{
    console.log("Failed to connect ",err)
})
// app.listen(PORT,()=>{
//     console.log("Backend is working on port : ", PORT);  
// })