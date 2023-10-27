let todoList = new Map();

function addTodo() {
    let todoName = document.querySelector('#todoName').value;
    if (todoName.length == 0) {
        alert("Please Enter a task😄");
    } else {
        const id = Date.now();
        todoList.set(id, todoName);
        printList();
        document.querySelector('#todoName').value = "";
    }
}

function printList() {
    let str = "";
    todoList.forEach((value, key, map) => {
        str += `<div class="task">
                    <span id="taskname">${value}</span>
                    <button id=${key} onclick="deleteTodo(this.id)">Delete</button>
                </div>`;
    })
    document.querySelector("#todoList").innerHTML = str;
    console.log(todoList);
}

function deleteTodo(id) {
    todoList.delete(id);
    printList();
}

function clearTodo() {
    if (todoList.size == 0) {
        alert("No Items To Clear😁")
    } else {
        todoList.clear();
    }
    printList();
}


