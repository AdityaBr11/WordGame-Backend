const express=require("express");
const env=require("dotenv")
const randomWords = require('random-words');
const { userRouter}=require("./routes/users.route")
const cors = require("cors");


const app=express();
const {connection}=require("./config/db")

app.use(cors());
app.use(express.json());
env.config()

app.use("/",userRouter)
app.get("/random",(req,res)=>{
    let randomWord = randomWords(1)
    res.send(randomWord)
})

app.listen(process.env.port||8080,async()=>{
    try{
        await connection
        console.log("connected to db")
    }catch(err){
        console.log(err)
    }
    console.log("port is running at port 4500")
})

