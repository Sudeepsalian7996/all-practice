const li=document.querySelector(".ul")
const btn=document.querySelector("#button")
const userName=document.querySelector("#name1")
const email=document.querySelector("#email")
let phone=document.querySelector("#phone")

//adding properties to button
btn.addEventListener("mouseout",(e)=>{
    e.preventDefault();
    btn.style.background="orange"
})

btn.addEventListener("mouseover",(e)=>{
    e.preventDefault();
    btn.style.background="green"
})

//validating the field
const validateError=document.querySelector(".error")
btn.addEventListener("click",(e)=>{
    e.preventDefault();
   
    //Displaying error
   if(userName.value==="" || email.value==="" || phone.value===""){
    validateError.textContent="Enter a valid valid name or password!!"
    validateError.style.color="red"
    setTimeout(()=>validateError.remove(),2000)  
   }
   else{

    //Displaying the values
   const first=document.createElement('li')
   first.appendChild(document.createTextNode(`${userName.value}`))
   first.appendChild(document.createTextNode(`${email.value}`))
   first.appendChild(document.createTextNode(phone.value))

   li.appendChild(first)

   //storing a values in object
   const my_obj={
    name:userName.value,
    email:email.value,
    phone:phone.value
   }

   //Storing a object in localStorage
   my_obj_string=JSON.stringify(my_obj)
   localStorage.setItem(email.value,my_obj_string)

  //Making the input box empty
   userName.value=""
   email.value=""
   phone.value=""
   }
   
})
