const express=require("express")
const cors=require("cors")
const bodyparser=require("body-parser")
const sequelize=require("./util/database")

const Userdetails=require("./routes/user")

const app=express()
app.use(cors())
app.use(bodyparser.json())

app.use(Userdetails)

sequelize.sync().then(()=>{
    app.listen(8081)
})