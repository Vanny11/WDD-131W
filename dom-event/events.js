// events.js

// Select DOM elements
const inputElement = document.querySelector("#todo");
const listElement = document.querySelector("#todoList");
const submitButton = document.querySelector("#submitTask");

// Function to add a new task
function newTask() {
  const task = inputElement.value.trim();

  if (task === "") return; // Prevent adding blank tasks

  listElement.innerHTML += `
    <li>
      <p>${task}</p>
      <div>
        <span data-function="delete">❎</span>
        <span data-function="complete">✅</span>
      </div>
    </li>`;

  inputElement.value = ""; // Clear input
}

// Function to manage task actions (delete or complete)
function manageTasks(e) {
  const parent = e.target.closest("li");
  const action = e.target.getAttribute("data-function");

  if (action === "delete") {
    parent.remove();
  } else if (action === "complete") {
    parent.classList.toggle("strike");
  }
}

// Event listeners
submitButton.addEventListener("click", newTask);
listElement.addEventListener("click", manageTasks);
