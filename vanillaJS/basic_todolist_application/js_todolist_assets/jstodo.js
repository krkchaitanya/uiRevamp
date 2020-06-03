let todoListItems;

triggerDefault();
function triggerDefault() {
    localStorage.clear();
    const todos = {todosArr : []};
    localStorage.setItem("todolist", JSON.stringify(todos));
    todoListItems = JSON.parse(localStorage.getItem("todolist"));
};


// selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todolist = document.querySelector(".todo-list");
const filterTodos = document.querySelector(".filter-todos");

// event listeners
todoButton.addEventListener("click", addTodo);
todolist.addEventListener("click", deleteCheck);
filterTodos.addEventListener("change", filterTodo);


// ======= functions start==========

// add todo
function addTodo(event) {
    event.preventDefault();

    if (undefined === todoInput.value || "" === todoInput.value.trim()) {
        validationMsgHandler("Enter Valid TODO item");
    } else {
        
        // setting the todo item in the localStorage
        if(!todoListItems.todosArr.includes(todoInput.value))     
        {
            todoListItems.todosArr.push(todoInput.value);
            console.log("--todoListItems--", todoListItems);
            localStorage.setItem("todolist", JSON.stringify(todoListItems));
        }
        // clear all the list items
        var lis = document.querySelectorAll('.todo-list li');
        for(var i=0; li=lis[i]; i++) {
            li.parentNode.remove();
        }
        // Append the todo items to the DOM
        todoListItems.todosArr.forEach(todoITem => addTodoDOMElement(todoITem));
        
    }
    
}

// Append todo item to the DOM
function addTodoDOMElement(todoITem) {
    event.preventDefault();
    validationMsgHandler("");

    // Creatin DOM elements
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    const newTodo = document.createElement("li");
    newTodo.innerText = todoITem;
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



// handle validation message
function validationMsgHandler(message) {
    
    if("" === message && null != document.querySelector(".validation-message")) {
        
        document.querySelector(".validation-message").remove();
        // document.querySelector(".validation-message").classList.remove("validation-message");
    
    } else {
        
        if(null === document.querySelector(".validation-message")) {
            const msgDiv = document.createElement("div");
            msgDiv.classList.add("validation-message");
            const h2element = document.createElement("h2");
            h2element.innerText = message;
            msgDiv.appendChild(h2element);
            document.querySelector(".msg").appendChild(msgDiv);   
        } else {
            document.querySelector(".validation-message").firstElementChild.innerText = message;
        }

    }

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


// filter todos
function filterTodo(e) {
    const optionSelected = e.target.value;
    ("" !== optionSelected) &&
        console.log("--validated the logical AND condition--");
}


// ======= functions end==========