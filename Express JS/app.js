

const express1=require("express")
const bodyparser=require("body-parser")
const admin=require("./routes/admin")
const shop=require("./routes/shop")

const app1=express1()
app1.use(bodyparser.urlencoded())//get the detail from input

app1.use("/admintwo",admin)

app1.use("/shop",shop)

app1.use((req,res,next)=>{
    res.send("<h1>Page is not found<h1>")
})
app1.listen(3000)
