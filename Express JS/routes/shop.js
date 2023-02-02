const express=require("express")

const route=express.Router()

route.get("/",(req,res,next)=>{
    res.send("<h1>successfully posted a shit<h1>")
})
module.exports=route