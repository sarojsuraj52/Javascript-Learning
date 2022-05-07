//AXIOS GLOBAL -> defining something for global use
axios.defaults.headers.common['X-Auth-Token'] = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'



// GET REQUEST
function getTodos() {
  axios
    .get('https://jsonplaceholder.typicode.com/todos?_limit=6',)
    .then((res) => showOutput(res))
    .catch((err) => console.log(err))
}

// POST REQUEST
function addTodo() {
  // axios({
  //   method:'post',
  //   url:'https://jsonplaceholder.typicode.com/todos',
  //   data: {
  //     title:'New Todo',
  //     completed:false
  //   }
  // })

  axios.post('https://jsonplaceholder.typicode.com/todos', {
    title: 'New post',
    completed: false
  })
    .then((res) => showOutput(res))
    .catch((err) => console.log(err))

}

// PUT/PATCH REQUEST
function updateTodo() {
  axios.patch('https://jsonplaceholder.typicode.com/todos/1', {
    title: 'Updated New post',
    completed: true
    //  axios.put('https://jsonplaceholder.typicode.com/todos/1',{  
    //   title:'Updated New post',
    //   completed:true
  })
    .then((res) => showOutput(res))
    .catch((err) => console.log(err))
}

// DELETE REQUEST
function removeTodo() {
  axios.delete('https://jsonplaceholder.typicode.com/todos/1')
    .then((res) => showOutput(res))
    .catch((err) => console.log(err))


}
// DELETE REQUEST as async await
async function removeTodo() {
  let res = await axios.delete('https://jsonplaceholder.typicode.com/todos/1')
  showOutput(res)

}

// SIMULTANEOUS DATA
function getData() {
  axios.all([
    axios.get('https://jsonplaceholder.typicode.com/todos'),
    axios.get('https://jsonplaceholder.typicode.com/posts')
  ])
    // .then((res)=> {
    //   console.log(res[0])
    //   console.log(res[1])
    //   showOutput(res[0])// here we can only show 1 data at a time either res[1] or res[1]
    // })
    .then((axios.spread((todos, posts) => { //axios.spread allows us to give name to array of data and it sould be in order like todos get first so likewise
      showOutput(todos)
    })))
    .catch(err => console.log(err))
}

// CUSTOM HEADERS
function customHeaders() {
  const config = {
    headers: {
      'Content-type': 'application/json',
      Authorization: 'someToken'
    }
  }
  axios.post('https://jsonplaceholder.typicode.com/todos', {
    title: 'New post',
    completed: false
  }, config)
    .then((res) => showOutput(res))
    .catch((err) => console.log(err))
}

// TRANSFORMING REQUESTS & RESPONSES
function transformResponse() {
  const options = {
    method: 'post',
    url: 'https://jsonplaceholder.typicode.com/todos',
    data: {
      title: 'Hello World'
    },
    transformResponse: axios.defaults.transformResponse.concat((data) => {
      data.title = data.title.toUpperCase()
      return data;
    })
  };

  axios(options).then((res) => showOutput(res))
}

// ERROR HANDLING
function errorHandling() {
  axios
  // .get('https://jsonplaceholder.typicode.com/todoss')//if cant reach the url
  .get('https://jsonplaceholder.typicode.com/todoss',{//if we still want to display our data  until certain condition
    validateStatus: function(status){
      return status < 500; // tatus greater and equal to 500 which is server error
    }
  })
  .then((res) => showOutput(res))
  .catch((err) => {
    if(err.response){ //server responds with status other than 200(successfull)
      console.log(err.response.status)
      console.log(err.response.data)
      console.log(err.response.headers)
    }
    else if(err.request){  //request was made but no response
      console.error(err.request);
    } 
    else{
      console.error(err.message)
    }
    
  })
}

// CANCEL TOKEN
function cancelToken() {
  const source = axios.CancelToken.source();
  axios
  .get('https://jsonplaceholder.typicode.com/todos',{
    cancelToken: source.token
  })
  .then((res) => showOutput(res))
  .catch(thrown =>{
    if(axios.isCancel(thrown)){
      console.log('Request is Cancel', thrown.message)
    }
    if(true) console.log('Request canceled') //self made condition for canceled request
  })
  
}

// INTERCEPTING REQUESTS & RESPONSES
axios.interceptors.request.use(
  config => {
    console.log(` ${config.method.toUpperCase()} request sent to url ${config.url} at ${new Date().getDate()}`);

    return config;
  },
  err => {
    return Promise.reject(err)
  }
)
// AXIOS INSTANCES -> like global or default settings
const axiosInstance =axios.create(
  {
    baseURL:'https://jsonplaceholder.typicode.com'
  }
) 

// axiosInstance.get('/comments').then(res=> showOutput(res))


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
