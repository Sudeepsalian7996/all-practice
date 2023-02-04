const express=require("express")
const path=require("path")

const suc=require("../controller/products")

const route=express.Router();

route.get("/",(req,res,next)=>{
    res.sendFile(path.join(__dirname,"../","views","contact.html"))
})
route.post("/success",(req,res,next)=>{
    console.log(req.body)
    res.redirect("/success1")  
})
route.get("/success1",suc.successCode)
module.exports=route