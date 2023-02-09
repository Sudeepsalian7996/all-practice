const Sequelize=require("sequelize")

const sequelize=require("../util/database")

const Products=sequelize.define("products",{
  id:{
    type:Sequelize.INTEGER,
    autoIncrement:true,
    primaryKey:true,
    allowNull:false
  },
  title:{
    type:Sequelize.STRING,
    allowNull:false
  },
  price:{
    type:Sequelize.DOUBLE,
    allowNull:false
  },
  imageUrl:{
    type:Sequelize.STRING,
    allowNull:false
  },
  description:{
    allowNull:false,
    type:Sequelize.STRING
  }
})

module.exports=Products