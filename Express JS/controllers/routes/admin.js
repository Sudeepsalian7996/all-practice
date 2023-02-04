const express=require("express")
const path=require("path")

const route=express.Router();


route.get("/",(req,res,next)=>{
   res.sendFile(path.join(__dirname,"../","views","addProduct.html"))
})
route.post("/add",(req,res,next)=>{
    console.log(req.body)//get the detail from input
   
})

module.exports=route