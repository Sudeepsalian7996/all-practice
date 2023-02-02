

const express1=require("express")

const app1=express1()
app1.use((req,res,next)=>{
    console.log("yh access of middleware")
    
    next()
})
app1.use((req,res,next)=>{
   res.send("<h1>response done<h1>")
})

app1.listen(3000)
