const mysql=require("mysql2")

const pool=mysql.createPool({
    host:"localhost",
    user:"root",
    database:"nodejs",
    password:"$alian7996"
});

module.exports=pool.promise()