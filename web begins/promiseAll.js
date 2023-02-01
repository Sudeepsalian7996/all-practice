let posts=[
    {title:"movie",body:"Avatar is my favourite movie" ,createdAt:new Date().getTime()},
    {title:"trecking",body:"Mount Everest is my favourite treck",createdAt:new Date().getTime()}
]


function createPost(post){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            posts.push({...post,createdAt:new Date().getTime()})
              resolve()
        },2000)
    })
  
}

let obj={
    lastSeen:new Date(2022,10,24)
}
console.log(`before updating--> ${obj.lastSeen}`)

function updateUser(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let err=true
            if(err){
            obj.lastSeen=new Date().getTime()
            resolve(`After updating--> ${obj.lastSeen}`)
            }else{
                reject("Something is wrong buddy..!")
            }
        },2000)
    })
}



Promise.all([createPost( {title:"family",body:"volleyball is my favourite movie"}),updateUser()]).then(([postCreated,updated])=>{
    console.log(updated)
   console.log(`The final collection of posts-->`)
   console.log(posts)
}).catch((err)=>console.log(err))

