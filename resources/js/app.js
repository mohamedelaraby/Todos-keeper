// Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
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


// Add Task ;- Operates adding new task process 
function addTask(event){

   if(taskInput.value === ''){
      alert('Add  a Task');
   }

   // Create new list item for the new task
   const li = document.createElement('li');
   
   // Add class to list item
   li.className = 'collection-item';

   // Get the taskinput value
   let taskTyped = taskInput.value;

   // Create text node and append to li
   li.appendChild(document.createTextNode(taskTyped));  

   // Create new link element
   const link = document.createElement('a');
   
   // Add class
   link.className = 'delete-item secondary-content';

   // Add icon html tag
   link.innerHTML = '<i class ="fa fa-times"></i>';

   // Append link to the new task list
   li.appendChild(link);

   // Append the li to the ul
  taskList.appendChild(li);

  // Clear the input
  taskInput.value = '';

   // Prevent the default behavior
   event.preventDefault();
}