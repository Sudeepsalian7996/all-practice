const mongoose=require("mongoose")

const Schema=mongoose.Schema

const userSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    cart:{
        items:[
            {
                productId:{type:Schema.Types.ObjectId,ref:"Product" ,required:true},
                quantity:{type:Number,required:true}
             }
        ]
    }
})
userSchema.methods.addToCart=function(product){
    const cartIndex=this.cart.items.findIndex((cp)=>{
        return cp.productId.toString()==product._id.toString()
    })
    let newQuantity=1
    let updatedItems=[...this.cart.items]
    if(cartIndex>=0){
      newQuantity= this.cart.items[cartIndex].quantity+1
      updatedItems[cartIndex].quantity=newQuantity
    }else{
        updatedItems.push({
            productId:product._id,
            quantity:newQuantity
        })
    }
    const updatedCart={
        items:updatedItems
    }
    this.cart=updatedCart
    return this.save()
}

userSchema.methods.deleteItemFromCart=function(productId){
        let updateProduct=this.cart.items.filter((ele)=>{
            return ele.productId.toString()!=productId.toString()
    })
    this.cart.items=updateProduct
    return this.save()
}
userSchema.methods.clearCart=function(){
    this.cart={items:[]}
    return this.save()
}
module.exports=mongoose.model("User",userSchema)