const http=require('http')

const server=http.createServer((req,res)=>{
    console.log(req.url)
    if(req.url==="/home"){
        res.setHeader("Content-Type","text/html")
   res.write('<html>')
   res.write("<head><h1>I am home</h1></head>")
   res.write('</html>')
   res.end()
    } else  if(req.url==="/about"){
        res.setHeader("Content-Type","text/html")
   res.write('<html>')
   res.write("<head><h1>welcome to about us page</h1></head>")
   res.write('</html>')
   res.end()
    } else  if(req.url==="/node"){
        res.setHeader("Content-Type","text/html")
   res.write('<html>')
   res.write("<head><h1>welcome to my node js project</h1></head>")
   res.write('</html>')
   res.end()
    }
  
})
server.listen(40)
