const addForm=document.getElementById("buttonForm")
const result=document.getElementById("items")
const filter=document.getElementById("filter")

addForm.addEventListener("click",addItem)

function addItem(e){
    e.preventDefault();

    //Adding a new list with new value
   const li=document.createElement("li")
   li.className="list-group-item"
   const newItem=document.getElementById("item").value
   const newItem2=document.getElementById("item1").value
   li.appendChild(document.createTextNode(newItem))
   li.appendChild(document.createTextNode(newItem2))
   
   //Add a edit button to newly created items
const edit=document.createElement("button")
edit.className="btn btn-primary btn-sm float-right edit"
edit.appendChild(document.createTextNode("edit"))
li.appendChild(edit)

   //Adding a delete button to the newly created list
   const deleteBtn=document.createElement("button")
    deleteBtn.className="btn btn-danger btn-sm float-right delete"
    deleteBtn.appendChild(document.createTextNode("X"))
    li.appendChild(deleteBtn)


    //Adding to unordered list
    result.appendChild(li)
}

//Code to remove the items

result.addEventListener("click",removeItem)

function removeItem(e){
  if(e.target.classList.contains("delete")){
    let removeVar=e.target.parentElement
    result.removeChild(removeVar)
  }
}

//filtering code
filter.addEventListener("keyup",filterItem)

function filterItem(e){
  let store=e.target.value.toLowerCase()
  const liItems=result.getElementsByTagName("li")

  Array.from(liItems).forEach(function(item){
    let itemName=item.childNodes[0].textContent;
    let itemName2=item.childNodes[1].textContent;
     //To get the value of each li tag
    if(itemName.toLowerCase().indexOf(store)!=-1 || itemName2.toLowerCase().indexOf(store)!=-1){
      
      item.style.display="block"  
    }else{
      item.style.display="none"
     
    }
  })
}