// GET REQUEST
function getTodos() {
  axios.get("https://jsonplaceholder.typicode.com/todos?_limit=5")
  .then((res)=>{showOutput(res) 
     console.log(res)})
  .catch((err)=>showOutput(err))

}

// POST REQUEST
function addTodo() {
 axios.post("https://jsonplaceholder.typicode.com/todos",{
  title:"myWork",
  completed:true,
  userId:10
 }).then((res)=>showOutput(res))
}

// PUT/PATCH REQUEST
function updateTodo() {
  axios.patch("https://jsonplaceholder.typicode.com/todos/11",{
    title:"Replaced title",
    completed:false
  }).then((res)=>{showOutput(res)})
  
}

// DELETE REQUEST
function removeTodo() {
 axios.delete("https://jsonplaceholder.typicode.com/todos/111")
 .then((res)=>showOutput(res))
}

// SIMULTANEOUS DATA
function getData() {
  axios.all([
   axios.get("https://jsonplaceholder.typicode.com/todos?_limit=5"),
    axios.get("https://jsonplaceholder.typicode.com/posts?_limit=5")
  ]).then(axios.spread((todo,post)=>{
    showOutput(post)
  }))
}

// CUSTOM HEADERS
function customHeaders() {
  const config={
    headers:{
    authentication:"tokens",
    "file":"some random file"
    }
  }
  axios.post("https://jsonplaceholder.typicode.com/todos",{
    title:"myWork",
    completed:true,
    userId:10
   },config).then((res)=>showOutput(res))
}

// TRANSFORMING REQUESTS & RESPONSES
function transformResponse() {
  const option ={
    method:"post",
    url:"https://jsonplaceholder.typicode.com/todos",
    data:{
      title:"my body",
      newThing:"jst tried"
    },
    transformResponse:axios.defaults.transformResponse.concat((data)=>{
      data.title=data.title.toUpperCase()
      return data
    })
  }
  axios(option).then((res)=>showOutput(res))
}

// ERROR HANDLING
function errorHandling() {
  axios.get("https://jsonplaceholder.typicode.com/todosss")
  .then((res)=>{showOutput(res)})
  .catch((err)=>{
    if(err.response.status===404){
      alert("404 page is not found")
    }
  })
}

// CANCEL TOKEN
function cancelToken() {
  console.log('Cancel Token');
}

// INTERCEPTING REQUESTS & RESPONSES
axios.interceptors.request.use((config)=>{

  console.log(`${config.method.toUpperCase()} request is sent to this-->${config.url} in this time ${new Date().getSeconds()}`)
  return config
})
// AXIOS INSTANCES

// Show output in browser
function showOutput(res) {
  document.getElementById('res').innerHTML = `
  <div class="card card-body mb-4">
    <h5>Status: ${res.status}</h5>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Headers
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.headers, null, 2)}</pre>
    </div>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Data
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.data, null, 2)}</pre>
    </div>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Config
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.config, null, 2)}</pre>
    </div>
  </div>
`;
}

// Event listeners
document.getElementById('get').addEventListener('click', getTodos);
document.getElementById('post').addEventListener('click', addTodo);
document.getElementById('update').addEventListener('click', updateTodo);
document.getElementById('delete').addEventListener('click', removeTodo);
document.getElementById('sim').addEventListener('click', getData);
document.getElementById('headers').addEventListener('click', customHeaders);
document
  .getElementById('transform')
  .addEventListener('click', transformResponse);
document.getElementById('error').addEventListener('click', errorHandling);
document.getElementById('cancel').addEventListener('click', cancelToken);
