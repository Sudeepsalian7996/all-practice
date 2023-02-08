

const Cart = require('./cart');
const db=require("../util/database")

module.exports = class Product {
  constructor(id, title, imageUrl, description, price) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
   return db.execute("insert into products (title,price,decscription,imageUrl) values(?, ?, ?, ?)",
   [this.title,this.price,this.description,this.imageUrl])
  }

  static deleteById(id) {
   return db.execute("delete from products where products.id=?",[id])
  }

  static fetchAll() {
    return db.execute("select * from products")
  }

  static findById(id) {
   return db.execute("select * from products where products.id=?",[id])
  }
}