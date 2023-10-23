function loadTodos(){
    console.log('lodoe')
    fetch('https://jsonplaceholder.typicode.com/users/1/todos')
    .then(res => res.json())
    .then(data => displayTodos(data))
}
function displayTodos(todos){
    const todoContainer = document.getElementById('todo-container')
    for(const todo of todos){
        console.log(todo)
        const todoDiv =  document.createElement('div');
        todoDiv.innerHTML = `
        <h3>title: ${todo.title}</h3>
        <p>completed:${todo.completed ===true ? 'cowplete': 'not complete' }`;
        // appendChild
        todoContainer.appendChild(todoDiv)

    }
}
loadTodos()
