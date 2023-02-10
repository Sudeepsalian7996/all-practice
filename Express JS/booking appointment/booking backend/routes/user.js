const express=require("express")
const routes=express.Router()
const add=require("../controller/add")


routes.post("/add-details",add.addmethod)

routes.get("/show-details",add.getmethod)

routes.delete("/delete-details/:id",add.deletemethod)

module.exports=routes