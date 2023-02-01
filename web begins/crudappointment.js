const li=document.querySelector(".ul")
const btn=document.querySelector("#button")
const userName=document.querySelector("#name1")
const email=document.querySelector("#email")
let phone=document.querySelector("#phone")

//fetching the data using get service

   axios.get("https://crudcrud.com/api/503f738c639848b58ec7d82715bcc5ff/appointmentApp2")
   .then((response)=>{
      console.log(response)
        showBrowser(response.data)
   })
   .catch((err)=>console.log(err))

function showBrowser(show){
   const parentNode=document.querySelector(".ul")
   for (let i = 0; i < show.length; i++) {
        var childNode=`<li id=${show[i]._id} style="margin-bottom:10px;">${show[i].name}-${show[i].email} - ${show[i].phone}
             <button onclick="deleteProduct('${show[i]._id}')" style="float:right; margin-left:5px;">Delete</button>  
             <button onclick=editProduct('${show[i]._id}','${show[i].phone}','${show[i].name}','${show[i].email}') style="float:right;">Edit</button>
                     </li>`
                     parentNode.innerHTML=parentNode.innerHTML+childNode;

          }
       
}
//Deleting the created appointment in screen and  from the server
function deleteProduct(key){
    axios.delete(`https://crudcrud.com/api/503f738c639848b58ec7d82715bcc5ff/appointmentApp2/${key}`)
    .then((resource)=>{
     removeScreen(key)
    })
    function removeScreen(key){
      parent=document.querySelector(".ul")
      child=document.getElementById(key)
      if(child){
         parent.removeChild(child)
      }
   }
   }   

//edit functionality
  function editProduct(key,p,n,e){
      userName.value=n
      email.value=e
      phone.value=p
      deleteProduct(key)
      // var update={
      //    phone:phone.value,
      //    email:email.value,
      //    name:userName.value
      // }
      // axios.put(`https://crudcrud.com/api/eeb47e462bfc41bb921651e8df94db6c/appointmentApp2/${key}`,update)
      // .then((res)=>{
      //    console.log(res)
      // })
   } 


btn.addEventListener("click",(e)=>{
    e.preventDefault();

   //Edit button functionality
      // buttonEdit.onclick=()=>{
      //    localStorage.removeItem(my_obj.email)
      //    li.removeChild(first)
      //    userName.value=my_obj.name
      //    email.value=my_obj.email
      //    phone.value=my_obj.phone
      // }

   // first.appendChild(button)
   // first.appendChild(buttonEdit)
   // li.appendChild(first)

   //storing a values in object
   const my_obj={
    name:userName.value,
    email:email.value,
    phone:phone.value
   }

   //Storing a object in localStorage
   // my_obj_string=JSON.stringify(my_obj)
   // localStorage.setItem(email.value,my_obj_string)

   //Storing the data on cloud storage
   axios.post("https://crudcrud.com/api/503f738c639848b58ec7d82715bcc5ff/appointmentApp2",my_obj)
   .then((resorce)=>{
           showScreen(resorce.data)
   })
   .catch((err)=>{
      console.log(err)
         })
   function showScreen(show){
      const parentNode=document.querySelector(".ul")
   for (let i = show.length-1; i < show.length-2; i--) {
        var childNode=`<li id=${show[i]._id} style="margin-bottom:10px;">${show[i].name}-${show[i].email} - ${show[i].phone}
             <button onclick="deleteProduct('${show[i]._id}')" style="float:right; margin-left:5px;">Delete</button>  
             <button onclick=editProduct('${show[i]._id}','${show[i].phone}','${show[i].name}','${show[i].email}') style="float:right;">Edit</button>
                     </li>`
                     parentNode.innerHTML=parentNode.innerHTML+childNode;

          }
   }
  //Making the input box empty
   userName.value=""
   email.value=""
   phone.value=""
 
})



