

let todoTemplate = document.getElementById("todoItem");
let todosContainer = document.getElementById("todosContainer");
let Itemscount = 0;
let remainingTodos = 0;
let addTodoBar = document.getElementById("addTodoBar");

let extraFunctionalities = document.getElementById("extraFunctionalities");
let showAllBtn = document.getElementById("allBtn");
let showCompletedBtn = document.getElementById("completedBtn");
let showActiveBtn = document.getElementById("activeBtn");
let clearCompletedBtn = document.getElementById("clearCompletedBtn");
let todoCount = document.getElementById("noOfItems");

let isCompleted = [];
let todoList = [];




addTodoBar.onkeypress = (event) => {
    if (event.keyCode === 13 && event.target.value != "") {
        let name = event.target.value;
        event.target.value = null;
        createNewTodoItem(name);
    }
};


function createNewTodoItem(name) {
    let newItem = todoTemplate.cloneNode(true);
    newItem.id = `todoItem${Itemscount++}`;
    let newTodoName = newItem.querySelector('p');
    newTodoName.textContent = name;

    addTodoItemToList(newItem);
    addFunctionalityToNewItem(newItem);
}

function addTodoItemToList(newItem) {
    todosContainer.appendChild(newItem);
    newItem.style.display = "flex";

    todoList.push(newItem);
    isCompleted.push(false);
    extraFunctionalities.style.display = "flex";
    updateTodoCount(++remainingTodos);

}

function addFunctionalityToNewItem(newItem) {
    let name = newItem.querySelector('p');
    let checkbox = newItem.querySelector("input[name=checkbox]");
    let removeBtn = newItem.querySelector("button");


    checkbox.addEventListener('change', function () {
        if (checkbox.checked) {
            name.style.textDecoration = 'line-through';
            name.style.color = "lightgrey";
            let parentId = name.parentElement.id;
            isCompleted[parentId[parentId.length - 1]] = true;
            updateTodoCount(--remainingTodos);

        }
        else {
            name.style.textDecoration = 'none';
            name.style.color = "black";
            updateTodoCount(++remainingTodos);
        }
    });

    name.onkeydown = (event) => {
        if (event.keyCode === 13) {
            name.blur();
        }
    };

    removeBtn.onclick = (event) => {
        let thisTodo = removeBtn.parentElement;
        console.log(thisTodo.id);

        let parentIndex = todoList.findIndex(item => item.id === thisTodo.id);
        console.log(parentIndex);
        removeBtn.parentNode.parentElement.removeChild(thisTodo);
        if (!isCompleted[parentIndex])
            updateTodoCount(--remainingTodos);



        Itemscount--;
        delete isCompleted[Itemscount - 1];
        delete todoList[Itemscount - 1];


        if (Itemscount == 0) {
            extraFunctionalities.style.display = "none";
        }
    };
}



showAllBtn.addEventListener("click", function () {
    todoList.filter(todo => {
        todo.style.display = "flex";
    });
});

showActiveBtn.addEventListener("click", function () {
    for (let i in isCompleted) {
        if (isCompleted[i]) {
            todoList[i].style.display = "none";
        }
        else {
            todoList[i].style.display = "flex";
        }
    }
});

showCompletedBtn.addEventListener("click", function () {
    for (let i in isCompleted) {
        if (isCompleted[i]) {
            todoList[i].style.display = "flex";
        }
        else {
            todoList[i].style.display = "none";
        }
    }
});

clearCompletedBtn.addEventListener("click", function () {
    console.log(todoList, isCompleted);

    let Obj = todoList.map((item, index) => {
        return {
            "Id": todoList[index],
            "status": isCompleted[index]
        };
    });
    console.log(Obj[0].Id === todoList[0]);
    console.log(Obj);



    for (let i in isCompleted) {
        if (isCompleted[i]) {
            todoList[i].parentElement.removeChild(todoList[i]);
            Itemscount--;
        }
    }
    if (Itemscount === 0)
        extraFunctionalities.style.display = "none";
});


function updateTodoCount(count) {
    if (count === 1) {
        todoCount.innerHTML = "1 item";
    }
    else {
        todoCount.innerHTML = `${count} items`;
    }
}
