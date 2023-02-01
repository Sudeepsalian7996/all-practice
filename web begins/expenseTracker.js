//Getting values from input box
let amount=document.getElementById("amount")
let description=document.getElementById("description")
let category=document.getElementById("category")
let button=document.getElementById("press")
let error=document.getElementById("error")
let allExpenses=document.getElementById("allExpenses")

button.addEventListener("click",buttonPress)

function buttonPress(e){
    e.preventDefault();
    
    if(amount.value==="" || description.value==="" || category.value===""){
        error.textContent="Fill all the required details..!!"
        error.style.color="red"
        setTimeout(()=>error.remove(),2000)
    }else{

        //Creating a list and showing the details in browser

        let expense=document.createElement("li")
        expense.className="expense list-group-item list-group-item-info"
        expense.setAttribute("id","expense")
        let textExpense=document.createTextNode(`${amount.value}-${description.value}-${category.value}`)
        expense.appendChild(textExpense)

        //Add a delete button to the newly created list
        let deletebtn=document.createElement("button")
        deletebtn.className="btn bg-danger btn-sm deleteList"
        deleteText=document.createTextNode("Remove")
        deletebtn.appendChild(deleteText)
        expense.appendChild(deletebtn)

        //Deleting a list from the browser
        deletebtn.addEventListener("click",(e)=>{
            e.preventDefault()
            let parent=deletebtn.parentElement
            allExpenses.removeChild(parent)
            localStorage.removeItem(storeLocal.amt)
        })

        //Add a edit button to the newly created list
        let editButton=document.createElement("button")
        editButton.className="btn bg-secondary btn-sm editButton"
        let editText=document.createTextNode("Edit")
        editButton.appendChild(editText)
        expense.appendChild(editButton)
       
        //Edit the Expenses
        editButton.addEventListener("click",(e)=>{
            e.preventDefault()
            parentEdit=editButton.parentElement;
            localStorage.removeItem(storeLocal.amt)
            allExpenses.removeChild(parentEdit)
            amount.value=storeLocal.amt
            description.value=storeLocal.desc
            category.value=storeLocal.cat
        })

        //Object to store the input values
        var storeLocal={
            amt:amount.value,
            desc:description.value,
            cat:category.value
        }
        //Storing the object in the local storage
        let objectToString=JSON.stringify(storeLocal)
        localStorage.setItem(amount.value,objectToString)

        allExpenses.appendChild(expense)
    }
    //To reset all the input boxes
    amount.value=" "
    description.value=" "
    category.value=" "
}


