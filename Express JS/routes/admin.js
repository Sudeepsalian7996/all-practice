const express=require("express")

const route=express.Router();


route.get("/add-product",(req,res,next)=>{
    console.log("yh access of middleware")
   res.send(`<form action='/admintwo/add-product' method='POST'><input type='text' name='message'>
   <input type="number" name="size"><button>submit<button><form>`)
})
route.post("/add-product",(req,res,next)=>{
    console.log(req.body)//get the detail from input
   res.redirect("/")
})

module.exports=route