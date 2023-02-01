const http=require("http")
const fs=require("fs")
const server=http.createServer((req,res)=>{
   
    if(req.url==="/"){
        res.write("<html>")
        res.write("<head><title>message</title></head>")
        res.write("<body><form action='/message' method='POST'><input type='text' name='message'><button type='submit'>send</button></form></body>")
        res.write("</html>")
        return res.end()
    }
    if(req.url==="/message" && req.method==="POST"){
       const array=[]
        req.on("data",(chuks)=>{
            array.push(chuks)
        })
        req.on("end",()=>{
            const body=Buffer.concat(array).toString();
            const msg=body.split("=")[1]
           fs.writeFileSync("message.txt",msg)
            
        })
        res.statusCode=302
         return res.end()
    }
        res.setHeader("Content-Type","text/html")
         res.write("<html>")
        res.write("<head><title>message</title></head>")
        res.write("<body><h1>Send button successfully used</h1></body>")
        res.write("</html>")
         res.end()
})
server.listen(4000)
