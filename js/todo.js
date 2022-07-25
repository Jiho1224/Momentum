const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const toDos = [];

function deleteTodo(event){
    //event.target.parentElement
    const li = event.target.parentElement;
    li.remove();
}
function paintTodo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");

    button.innerText = "❌";
    button.addEventListener("click",deleteTodo);

    li.appendChild(span);
    li.appendChild(button);

    span.innerText = newTodo;
    toDoList.appendChild(li);
}

function handleTodoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    toDos.push(newTodo);
    paintTodo(newTodo);
}

toDoForm.addEventListener("submit",handleTodoSubmit);