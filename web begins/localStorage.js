const userName=document.querySelector("#name1")
const email=document.querySelector("#email")
const btn=document.querySelector("#button")

btn.addEventListener("click",(e)=>{
    e.preventDefault();
   localStorage.setItem("name",userName.value)
   localStorage.setItem("email",email.value)
})
