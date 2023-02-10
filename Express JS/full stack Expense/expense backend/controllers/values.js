const expense=require("../models/define")

exports.addExpense=async(req,res)=>{
    try{
       const amount=req.body.amount
       const description=req.body.description
       const category=req.body.category
      const data = await expense.create({
        amount:amount,
        description:description,
        category:category
       })
       res.json({newUser:data})
    }catch(err){
        console.log("addExpense backend error")
        res.json({Error:err})
    }
}

exports.getExpense=async (req,res)=>{
    try{
       const data= await expense.findAll()
       res.json({allExpenses:data})
    }catch(err){
        console.log("get expense backend error!")
        res.json({Error:err})
    }
}

exports.deleteExpense=async(req,res)=>{
    try{
        const expenseId=req.params.id
        if(!expenseId){
            throw new Error("id should match")
        }
        
       const data = await expense.destroy({where:{id:expenseId}})
        res.json({deleted:data})
    }catch(err){
        console.log("delete expense backend error")
        res.json({Error:err})
    }
}
