 exports.successCode=(req,res,next)=>{
    console.log("get method succeed")
    res.send("<h1>Form successfully sent<h1>")
}