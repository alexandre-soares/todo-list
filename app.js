// Selectors

const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

// Event Listeners

// Add a todo
todoButton.addEventListener("click", addTodo);

// Delete/Check a todo
todoList.addEventListener("click", deleteCheck);

// Detect filter option
filterOption.addEventListener("click", filterTodo);

// Functions

function addTodo(event) {
	// prevent form from submitting
	event.preventDefault();

	// create todo div
	const todoDiv = document.createElement("div");
	todoDiv.classList.add("todo");

	// create todo li
	const newTodo = document.createElement("li");
	newTodo.innerText = todoInput.value;
	newTodo.classList.add("todo-item");
	todoDiv.appendChild(newTodo);

	// create check button
	const completedButton = document.createElement("button");
	completedButton.innerHTML = '<i class="fas fa-check"></i>';
	completedButton.classList.add("complete-btn");
	todoDiv.appendChild(completedButton);

	// create delete button
	const trashButton = document.createElement("button");
	trashButton.innerHTML = '<i class="fas fa-trash"></i>';
	trashButton.classList.add("trash-btn");
	todoDiv.appendChild(trashButton);

	// Append to list
	todoList.appendChild(todoDiv);

	// Clear todo input value
	todoInput.value = "";
}

function deleteCheck(e) {
	const item = e.target;

	// Delete

	if (item.classList[0] === "trash-btn") {
		const todo = item.parentElement;
		// Animate removed item
		todo.classList.add("removed");
		todo.addEventListener("transitionend", function () {
			todo.remove();
		});
	}

	// Check

	if (item.classList[0] === "complete-btn") {
		const todo = item.parentElement;
		todo.classList.toggle("completed");
	}
}

function filterTodo(e) {
	const todos = todoList.childNodes;

	// console.log(todos);

	todos.forEach(function (todo) {
		switch (e.target.value) {
			case "all":
				todo.style.display = "flex";
				break;
			case "uncompleted":
				if (!todo.classList.contains("completed")) {
					todo.style.display = "flex";
				} else {
					todo.style.display = "none";
				}
				break;
			case "completed":
				if (todo.classList.contains("completed")) {
					todo.style.display = "flex";
				} else {
					todo.style.display = "none";
				}
				break;

			default:
				break;
		}
	});
}
