const http=require("http")
const values=require("./router")
const server=http.createServer(values)

server.listen(4000)
