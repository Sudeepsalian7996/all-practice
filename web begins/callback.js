let posts=[
    {title:"movie",body:"Avatar is my favourite movie" ,createdAt:new Date().getTime()},
    {title:"trecking",body:"Mount Everest is my favourite treck",createdAt:new Date().getTime()}
]

function displayPost(){
setInterval(()=>{
    var result=""
    posts.forEach((post)=>{
        result+=`<li>${post.title} is created ${Math.floor((new Date().getTime()-post.createdAt)/1000)} seconds ago</li>`
    })
    document.body.innerHTML=result
},1000)
}

function createPost(value,callback){
    setTimeout(()=>{
        posts.push({...value,createdAt:new Date().getTime()})
        callback()
    },2000)
}


function demoPost(value,callback){

    setTimeout(()=>{
        posts.push({...value,createdAt:new Date().getTime()})
        callback()
    },2000)
}
createPost({title:"friends",body:"friendship is beautiful"},displayPost)
createPost({title:"family",body:"family is love"},displayPost)
demoPost({title:"volleyball",body:"love to play"},displayPost)