let posts=[
    {title:"movie",body:"Avatar is my favourite movie" ,createdAt:new Date().getTime()},
    {title:"trecking",body:"Mount Everest is my favourite treck",createdAt:new Date().getTime()}
]

function displayPost(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("display function")
            const err=true
            if(err){
            var result=""
            posts.forEach((post)=>{
                result+=`<li>${post.title} is created ${Math.floor((new Date().getTime()-post.createdAt)/1000)} seconds ago</li>`
            })
            document.body.innerHTML=result
            resolve(result)
        }else{
            reject("array is full")
        }
    })
   
},1000)
}

function createPost(value){
    return new Promise((resolve)=>{
        console.log("createPost function")
        setTimeout(()=>{
           const pushed= posts.push({...value,createdAt:new Date().getTime()})        
            resolve(pushed)      
        },1000)
    })
    
}

function deletePost(){   
    return new Promise((resolve,reject)=>{
        console.log("deletePost function")
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

const managePost=async()=>{
    try{
        const displayBrowser= displayPost()
        await createPost({title:"testCase",body:'its just a normal testCase'})
        await createPost({title:"volleyball",body:'its just a normal testCase'})
         displayPost()
        await deletePost()
         displayPost()
        await deletePost()
         displayPost()
         }catch(err){
                console.log(err)
            }
        
        }
managePost()