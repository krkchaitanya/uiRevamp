let todoListItems;
let checkedTodoList;
let deletedTodoList;

// Trigger the function by default when the JS file loads
triggerDefault();
function triggerDefault() {
    //clear the local storage
    localStorage.clear();
    // set the inital todo objects
    const todos = {todosArr : []};
    const checkedTodos = {checkedTodosArr : []};
    const deletedTodos = {deletedTodosArr : []};
    // set items in the local storage
    localStorage.setItem("todolist", JSON.stringify(todos));
    localStorage.setItem("checkedList", JSON.stringify(checkedTodos));
    localStorage.setItem("deletedList", JSON.stringify(deletedTodos));
    
    todoListItems = JSON.parse(localStorage.getItem("todolist"));
    checkedTodoList = JSON.parse(localStorage.getItem("checkedList"));
    deletedTodoList = JSON.parse(localStorage.getItem("deletedList"));
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
      
        clearAndAppendTodos(todoListItems);
        
    }
    
}


// clear and append todo list to the DOM
function clearAndAppendTodos(todoItems) { 
    // clear all the list items
    var lis = document.querySelectorAll('.todo-list li');
    for(var i=0; li=lis[i]; i++) {
        li.parentNode.remove();
    }
    // Append the todo items to the DOM
    todoListItems === todoItems &&
    todoItems.todosArr.forEach(todoITem => addTodoDOMElement(todoITem));
    if(checkedTodoList === todoItems) {
        todoItems.checkedTodosArr.forEach(todoITem => {
            addTodoDOMElement(todoITem);
        });
        appendCss();
    }
    if (deletedTodoList === todoItems) {
        todoItems.deletedTodosArr.forEach(todoITem => addTodoDOMElement(todoITem));
    }
}

// Append todo item to the DOM todo list element
function addTodoDOMElement(todoITem, classnm) {
    event.preventDefault();
    validationMsgHandler("");

    // Creating DOM elements
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
        //update local storage
        deletedTodoList.deletedTodosArr.push(item.parentElement.innerText);
        localStorage.setItem("deletedList", JSON.stringify(deletedTodoList));
    }

    if (item.classList[0] === "completed-button") {
        item.parentElement.classList.toggle("completed");
        //update local storage
        checkedTodoList.checkedTodosArr.push(item.parentElement.innerText);
        localStorage.setItem("checkedList", JSON.stringify(checkedTodoList));
    }

}


// filter todos
function filterTodo(e) {
    const optionSelected = e.target.value;
    console.log("---", optionSelected);
    if ("" !== optionSelected) {
        switch(optionSelected) {
            case "all":
                clearAndAppendTodos(todoListItems);
                break;
            case "completed":
                clearAndAppendTodos(checkedTodoList);
                break;
            case "uncompleted":
                clearAndAppendTodos(deletedTodoList);
                break;
            default: 
                clearAndAppendTodos(todoListItems);
        }
    }
        
}

// append css to the todo items
 function appendCss() {

    const todoDomElementsArr = Array.of(todolist.children)[0];
    const cssTodoList = todoDomElementsArr.filter(todo => todoListItems.todosArr.includes(todo.innerText));

    const cssCheckedTodoList = todoDomElementsArr.filter(todo => checkedTodoList.todosArr.includes(todo.innerText));
    cssCheckedTodoList.forEach(checkedTodo => checkedTodo.classList.add("completed"));


 }


// ======= functions end==========