

const express1=require("express")
const bodyparser=require("body-parser")
const path=require("path")

const admin=require("./routes/admin")
const shop=require("./routes/shop")
const contact=require("./routes/contact")

const app1=express1()
app1.use(bodyparser.urlencoded())//get the detail from input

//access public folder
app1.use(express1.static(path.join(__dirname,"public")))

app1.use("/add-product",admin)

app1.use("/shop",shop)

app1.use("/contact",contact)

app1.use((req,res,next)=>{
    res.sendFile(path.join(__dirname,"views","404.html"))
})
 app1.listen(4000)
