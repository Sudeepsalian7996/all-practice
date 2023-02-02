

const express1=require("express")
const bodyparser=require("body-parser")

const app1=express1()
app1.use(bodyparser.urlencoded())

app1.use("/add-product",(req,res,next)=>{
    console.log("yh access of middleware")
   res.send(`<form action='/second' method='POST'><input type='text' name='message'>
   <input type="number" name="size"><button>submit<button><form>`)
})
app1.post("/second",(req,res,next)=>{
    console.log(req.body)
   res.redirect("/")
})
app1.use("/",(req,res,next)=>{
    res.send("<h1>The ultimate buster nigga<h1>")
})
app1.listen(3000)
