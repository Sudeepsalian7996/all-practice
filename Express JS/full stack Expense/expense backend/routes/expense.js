const express=require("express")
const expenseValues=require("../controllers/values")

const routes=express.Router()

routes.post("/add-expense",expenseValues.addExpense)

routes.get("/get-expense",expenseValues.getExpense)

routes.delete("/delete-expense/:id",expenseValues.deleteExpense)


module.exports=routes