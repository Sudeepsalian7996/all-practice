const Sequelize=require("sequelize")
const sequelize=require('../util/database')

const user=sequelize.define("users",{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        allowNull:false,
        autoIncrement:true
    },
   name:{
    type:Sequelize.STRING,
    allowNull:false
   } ,
   email:{
    type:Sequelize.STRING,
    allowNull:false,
    unique:true
   },
   phone:{
    type:Sequelize.STRING,
    allowNull:false,
    unique:true
   }
})
module.exports=user