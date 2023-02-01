//Using promises
console.log("1 shows ticket")
console.log("2 shows ticket")

const bringTicket= new Promise((resolve,reject)=>{
    setTimeout(() => {
       let err=true
       if(err){
        resolve("3rd ticket")
       }else{
        reject("error manh solve this asap..")
       }
    }, 2000);       
    })

const bringCorn=bringTicket.then((t)=>{
    return new Promise((resolve,reject)=>{
        console.log("im hungry bring some corn")
        let err=true
        if(err){
            resolve(`${t} with popcorn `)
        }else{
            reject("corn didnt brought")
        }
    })
}).catch((err)=>{console.log(err)})

const bringButter= bringCorn.then((t)=>{
    return new Promise((resolve,reject)=>{
        let err=true
        console.log("i need butter also")
        if(err){
            resolve(`${t} added with butter`)
        }else{
            reject("dont print anything")
        }      
    })    
}).catch((err)=>{console.log(err)})
const bringColdDrinks= bringButter.then((t)=>{
    console.log("i need cold driks")
    return new Promise((resolve)=>{
        resolve(`${t} and cold drinks`)
    })
})
bringColdDrinks.then((t)=>{console.log(t)})
console.log("4 th ticket")
console.log("5th ticket")


// //Using async await
// console.log("1 shows ticket")
// console.log("2 shows ticket")

// const moviePlan=async function(){
//     const bringTicket= new Promise((resolve,reject)=>{
//             setTimeout(() => {
//                let err=true
//                if(err){
//                 resolve("3rd ticket")
//                }else{
//                 reject("error manh solve this asap..")
//                }
//             }, 2000);       
//             })
//     const first=await bringTicket;
//     console.log("im hungry bring some corn")
//     const bringCorn=new Promise((resolve,reject)=>{
//                 let err=true
//                 if(err){
//                     resolve(`${first} with popcorn `)
//                 }else{
//                     reject("corn didnt brought")
//                 }
//             })
//     const second=await bringCorn
//     console.log("i need butter also")
//     const bringButter= new Promise((resolve,reject)=>{
//                     resolve(`${second} added with butter`)
//             })    
//     const third=await bringButter;

//     const getColdDrinks=new Promise((resolve)=>{resolve(`${third} and with some cold drinks`)})
//     console.log("i need cold drink also")
    
//     return getColdDrinks
// }
// moviePlan().then((t)=>{console.log(t)})

// console.log("4 th ticket")
// console.log("5th ticket")