const http=require("http")
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
   
        req.on("end",()=>{
            const body=Buffer.concat(array).toString();
            const msg=body.split("=")[1]
            
            res.write("<html>")
                res.write("<head><title>message</title></head>")
                res.write(`<body>${msg}`)
                res.write("<form action='/msg' method='POST'><input type='text' name='message'><button type='submit'>send</button></form></body>")
                res.write("</html>")
                 return res.end()
          })  
    }   
})
server.listen(3000)
