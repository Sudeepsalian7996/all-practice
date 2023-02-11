const express=require("express")
const cors=require("cors")
const bodyParser=require("body-parser")

const sequelize=require("./util/database")
const expenses=require("./routes/expense")

const app=express()

app.use(cors())
app.use(bodyParser.json())

app.use(expenses)

sequelize.sync().then(()=>{
    app.listen(2500)   
})

