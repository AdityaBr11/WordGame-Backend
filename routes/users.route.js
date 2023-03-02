const express = require("express")
const userRouter = express.Router()
const {UserModel} = require("../models/user.model")
 
userRouter.get("/",async (req,res)=>{
    try {
        let data = await UserModel.find()
        res.send(data)
    } catch (error) {
        console.log(error);
    }
})

userRouter.post("/",async(req,res)=>{
    const {name,difficulty,score} = req.body
    try {
        const user = new UserModel({name,difficulty,score})
        await user.save()

        const userData=await UserModel.find({name:name});
        res.send(userData)
    } catch (error) {
        res.send(error)
    }
})

module.exports = {userRouter}