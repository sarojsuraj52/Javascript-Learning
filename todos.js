const todos = [
    {
        id:1,
        text:"Task 1",
        isCompleted:true
    },
    {
        id:2,
        text:"Task 2",
        isCompleted:true
    },
    {
        id:3,
        text:"Task 3",
        isCompleted:false
    },
    {
        id:4,
        text:"Task 4",
        isCompleted:true
    }
];

for(let i=0;i<todos.length;i++){
    console.log(todos[i].id)
}

let i=0;
while(i<todos.length){
    console.log(todos[i].id)
    i++;
}


// todos.forEach(todo => {
//     console.log(todo.id)
// });

// const todo = todos.map(todo=>{
//     return todo.id;
// })
// console.log(todo)

// const todo = todos.filter(todo=>{
// return todo.isCompleted === true;
// }).forEach(todo => {
//     console.log(todo.text);
// });
