const http=require("http")
const fs=require("fs")
const server=http.createServer(async (req,res)=>{
   
    if(req.url==="/"){
        res.write("<html>")
        res.write("<head><title>message</title></head>")
        res.write("<body><form action='/msg' method='POST'><input type='text' name='message'><button type='submit'>send</button></form></body>")
        res.write("</html>")
    }
    if(req.method==="POST" && req.url==="/msg"){
        const array=[]
        req.on("data",(chuks)=>{
            array.push(chuks)
        })
     let msg1;
        req.on("end",()=>{
            const body=Buffer.concat(array).toString();
            const msg=body.split("=")[1]
            msg1=msg
            console.log(msg1)
            res.write("<html>")
                res.write("<head><title>message</title></head>")
                res.write(`<body>${msg1}`)
                res.write("<form action='/msg' method='POST'><input type='text' name='message'><button type='submit'>send</button></form></body>")
                res.write("</html>")
    
            return res.end()
        })
       
        
    }
    
})
server.listen(3000)
