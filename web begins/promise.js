let posts=[
    {title:"movie",body:"Avatar is my favourite movie" ,createdAt:new Date().getTime()},
    {title:"trecking",body:"Mount Everest is my favourite treck",createdAt:new Date().getTime()}
]

function displayPost(){
setTimeout(()=>{
    console.log("display function")
    var result=""
    posts.forEach((post)=>{
        result+=`<li>${post.title} is created ${Math.floor((new Date().getTime()-post.createdAt)/1000)} seconds ago</li>`
    })
    document.body.innerHTML=result
},100)
}

function createPost(value){
    return new Promise((resolve)=>{
      
        setTimeout(()=>{
            posts.push({...value,createdAt:new Date().getTime()})        
            resolve()      
        },1000)
    })
    
}

function deletePost(){   
    return new Promise((resolve,reject)=>{
    
        setTimeout(()=>{
            if(posts.length>0){
                const deleted=posts.pop()
                resolve(deleted)
              }else{
                reject("Array is empty")
              }
        },1000)
    })
}

//deleting my posts per second 
createPost({title:"jointJanna",body:"sports is beautiful"}).then(()=>{displayPost})
createPost({title:"sports",body:"sports is beautiful"})
.then(()=>{
    displayPost();
    deletePost().then(()=>{
        displayPost();
        deletePost().then(()=>{
            displayPost();
            deletePost().then(()=>{
                displayPost();
                deletePost().then(()=>{
                    displayPost();
                    deletePost().then().catch((error)=>console.log(error))
                }).catch((error)=>console.log(error))
            }).catch((error)=>console.log(error))
        }).catch((error)=>console.log(error))
    }).catch((error)=>console.log(error))
}).catch((error)=>console.log(error))


