
document.getElementById("form").addEventListener("submit", addExpense);

window.addEventListener("DOMContentLoaded",async ()=>{
 try{
   const response= await axios.get("https://crudcrud.com/api/cb776c28dbb64de799ee613100fa4200/eCommerceApp")
    for (let i = 0; i < response.data.length; i++) {
      showScreen(response.data[i])
    }
 }catch{
    console.log("domloaded error")
 }
})


//showing the data on the screen 
function showScreen(data){
  try{
    if(data.category==="Electronics"){
      var  child=`<li id=${data._id} class="list-group-items h4 text-center" style="margin-bottom:10px;">${data.price}--${data.product}--${data.category}
      <button class="btn btn-control btn-danger btn-lg" onclick="deleteProduct('${data._id}')" style="float:right; margin-left:5px;">DeleteProduct</button></li>`
        electro.innerHTML=electro.innerHTML+child
    }
    else if(data.category==="food"){
        var  child=`<li id=${data._id} class="list-group-items h4 text-center" style="margin-bottom:10px;">${data.price}--${data.product}--${data.category}
        <button class="btn btn-control btn-danger btn-lg" onclick="deleteProduct('${data._id}')" style="float:right; margin-left:5px;">DeleteProduct</button></li>`
          food.innerHTML=food.innerHTML+child
      }
      else if(data.category==="skincare"){
        var  child=`<li id=${data._id} class="list-group-items h4 text-center" style="margin-bottom:10px;">${data.price}--${data.product}--${data.category}
        <button class="btn btn-control btn-danger btn-lg" onclick="deleteProduct('${data._id}')" style="float:right; margin-left:5px;">DeleteProduct</button></li>`
          skin.innerHTML=skin.innerHTML+child
      }
      
  }catch{
    console.log("error in showscreen")
  }
      
   }

async function addExpense(e) {
  try{
    e.preventDefault()
    let price=document.querySelector("#price")
    let product=document.getElementById("pname")
    let category=document.getElementById("category")
  
    let my_obj={
        price: price.value,
        product:product.value,
        category:category.value
    }
    
    let response= await axios.post("https://crudcrud.com/api/cb776c28dbb64de799ee613100fa4200/eCommerceApp",my_obj)
    
    showScreen(response.data)
    }catch{
        console.log("something is not right")
    }
}

//delete products
async function deleteProduct(key){
  try{
    const resource=await axios.delete(`https://crudcrud.com/api/cb776c28dbb64de799ee613100fa4200/eCommerceApp/${key}`)
    removeScreen(key)
    function removeScreen(key){
      p2=document.querySelector("#food")
      p1=document.querySelector("#electro")
      p3=document.querySelector("#skin")
    
      child=document.getElementById(key)
      console.log(child.parentElement)
      if(child.parentElement===p1){
      p1.removeChild(child)
      
    }else if(child.parentElement===p2){
      p2.removeChild(child)
    }else if(child.parentElement===p3){
      p3.removeChild(child)
    }
    }
  }catch{
    console.log("bug found in deleteProduct")
  }
}

