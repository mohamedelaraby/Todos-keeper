// Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.list-group');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners
loadEventListeners();

// load all event listeners
function loadEventListeners(){

   // Add task event
   form.addEventListener('submit', addTask);
}


// Add Task 
function addTask(event){

   if(taskInput.value === ''){
      alert('Add  a Task');
   }

   // Prevent the default behavior
   event.preventDefault();
}