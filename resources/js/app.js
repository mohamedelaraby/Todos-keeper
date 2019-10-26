
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

   // Remove task event
   taskList.addEventListener('click', removeTask);

   // Clear tasks event
   clearBtn.addEventListener('click', clearTasks);

   // Filter Tasks event
   filter.addEventListener('keyup', filterTasks);
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

  // Store in local storage
  storeTasksInLocalStorage();

  // Clear the input
  taskInput.value = '';

   // Prevent the default behavior
   event.preventDefault();
}

// Store tasks in  local storage
function storeTasksInLocalStorage(task){
   
   let tasks;
   if (localStorage.getItem('tasks') === null) {
      tasks = []; 
      
   } else {
      tasks = JSON.parse(localStorage.getItem('tasks'));
   }
}


// Remove task
function removeTask(event){

   // Check for the link 
   if(event.target.parentElement.classList.contains('delete-item')){

      // Remove the li itself
      if(confirm('Are you sure?!')){
         event.target.parentElement.parentElement.remove();
      }
   }
}


// Clear Tasks
function clearTasks(){
   if(taskList.hasChildNodes('.collection-item')){
      //taskList.innerHTML = '';  // First way
      
   
      // Faster way
      while(taskList.firstChild){
         taskList.removeChild(taskList.firstChild);
      }

   
   } else {
      alert('Add a task');
   }
 
}



// Filter tasks
function filterTasks(e){
    // Get the filter input value
    const text = e.target.value.toLowerCase();
  
    // Choose all list items
    document.querySelectorAll('.collection-item').forEach( function(task){
       // Get list text content
       const item = task.firstChild.textContent;

       if(item.toLowerCase().indexOf(text) !== -1){
          task.style.display = 'block';
       } else {
          task.style.display = 'none';
       }
    })
}

