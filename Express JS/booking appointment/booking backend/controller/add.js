const user=require("../models/define")

exports.addmethod= async (req,res,next)=>{
    try{
    const name=req.body.name
    const email=req.body.email
    const phone=req.body.phone
    console.log(name,email,phone)
   const data= await user.create({
        name:name,
        email:email,
        phone:phone
    })
    res.json({newuser:data})
   
    } catch(err){
        res.json({
            Error:err
        })
    }
}

exports.getmethod=async(req,res)=>{
    try{
        const data=await user.findAll()
        res.json({alluser:data})
    }catch(err){
        console.log("this is error from app.js in get method")
        res.json({Error:err,})
    }
    
}

exports.deletemethod=async(req,res)=>{
    try{
    if(!req.params.id){
        throw new Error ("id is mandatory to delete")
    }
    const detailsId=req.params.id
    await user.destroy({where: {id:detailsId}})

    }
    catch(err){
        console.log("error in app.js delete method")
        res.json({Error:err})
    }
}

