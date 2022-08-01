const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

let toDos = [];

function saveToDos(){
    localStorage.setItem("todos",JSON.stringify(toDos));
}
//JSON.parse(localStorage.getItem("todos"));
function deleteTodo(event){
    //event.target.parentElement
    const li = event.target.parentElement;
    li.remove();

    //todo list에서 삭제하고 갱신
    toDos =  toDos.filter((item) => {
        return item.id != li.id;
    });

    //local storage에 새로운 todo list를 넣어준다.
    saveToDos();
}

function paintTodo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;

    const span = document.createElement("span");
    const button = document.createElement("button");

    button.innerText = "❌";
    button.addEventListener("click",deleteTodo);

    li.appendChild(span);
    li.appendChild(button);

    span.innerText = newTodo.text;
    toDoList.appendChild(li);
}

function handleTodoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoj = {
        text : newTodo,
        id: Date.now()
    }
    toDos.push(newTodoj);
    paintTodo(newTodoj);
    saveToDos();
}


toDoForm.addEventListener("submit",handleTodoSubmit);

const savedTodos = localStorage.getItem("todos");

if(savedTodos){
    const parsed = JSON.parse(savedTodos);
    toDos = parsed;
    parsed.forEach(paintTodo); // 배열의 각각의 item에 대해 실행
}