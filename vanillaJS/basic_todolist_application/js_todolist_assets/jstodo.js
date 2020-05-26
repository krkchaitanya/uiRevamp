
// selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todolist = document.querySelector(".todo-list");


// event listeners
todoButton.addEventListener("click", addTodo);
todolist.addEventListener("click", deleteCheck);



// ======= functions start==========

// add todo
function addTodo(event) {

    event.preventDefault();
    
    // Creatin DOM elements
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

    const completedButton = document.createElement("button");
    completedButton.innerHTML='<i class="fas fa-check"></i>';
    completedButton.classList.add("completed-button");
    todoDiv.appendChild(completedButton);

    const trashButton = document.createElement("button");
    trashButton.innerHTML='<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-button");
    todoDiv.appendChild(trashButton);

    todolist.appendChild(todoDiv);

    todoInput.value = "";
    
}


// delete todo or mark todo completed
function deleteCheck(e) {

    const item = e.target;

    if (item.classList[0] === "trash-button") {
        const todo = item.parentElement;
        // animation
        todo.classList.add("fall");
        todo.addEventListener("transitionend", function() {
            todo.remove();
        });
    }

    if (item.classList[0] === "completed-button") {
        item.parentElement.classList.toggle("completed");
    }

}


// ======= functions end==========