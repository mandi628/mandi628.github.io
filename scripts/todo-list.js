/* 1. Get HTML Elements for input, button, and list.
   2. Add an Event Listener to handle adding tasks when the button is clicked.
   3. Update the DOM by creating new <li> elements for each task. */

// Get references to the DOM elements
const inputElement = document.getElementById('todo-input');
const addButton = document.getElementById('add-button');
const todoList = document.getElementById('todo-list');

// (Optional) Function to save tasks to local storage
function saveTasksToLocalStorage(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// (Optional) Function to load tasks from local storage
function loadTasksFromLocalStorage() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => addTaskToDOM(task));
}

// (Optional) Function to add a new task to the DOM
function addTaskToDOM(taskText) {
    // Create a new list item (li) element
    const taskItem = document.createElement('li');
    taskItem.textContent = taskText;

    //Create a delete button for the task
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function() {
        todoList.removeChild(taskItem);
        removeTaskFromLocalStorage(taskText);
    };

    // Add the delete button to the list item
    taskItem.appendChild(deleteButton);

    // Add the list item to the to-do list
    todoList.appendChild(taskItem);
}

// Function to add a new task
function addTask() {
    // Get the input value
    const taskText = inputElement.value.trim();

    // Check if input is empty
    if (taskText === '') {
        alert("Please enter a task!");
        return;
    }

    // Add task to the DOM
    addTaskToDOM(taskText);

    // Save task to local storage
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(taskText);
    saveTasksToLocalStorage(tasks);

    // // Create a new list item (li) element
    // const taskItem = document.createElement('li');
    // taskItem.textContent = taskText;

    // // Create a delete button for the task
    // const deleteButton = document.createElement('button');
    // deleteButton.textContent = 'Delete';
    // deleteButton.onclick = function() {
    //     todoList.removeChild(taskItem);
    // };

    // // Add the delete button to the list item
    // taskItem.appendChild(deleteButton);

    // // Add the list item to the to-do list
    // todoList.appendChild(taskItem);

    // Clear the input field
    inputElement.value = '';
}

// Function to remove a task from local storage
function removeTaskFromLocalStorage(taskText) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks = tasks.filter(task => task !== taskText); // Remove the task freom the array
    saveTasksToLocalStorage(tasks);
}

// Add event listener to the button
addButton.addEventListener('click', addTask);

// Load tasks from local storage when the page loads
window.addEventListener('load', loadTasksFromLocalStorage);
