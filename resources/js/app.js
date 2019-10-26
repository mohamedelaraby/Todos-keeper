 // Handle the UI 
 // Focus mode
 $(document).ready(function(){

   // Change Background of input
   $('input#task').focus(function(){
      $('#task').css('background','#ccc');
   })

   $('input').blur( function(){
      $(this).css('background','#f4f4f4');
   })

 });



//  /// SET local storage item
//  localStorage.setItem('name','john');

//  // Set session storage
//  sessionStorage.setItem('name','ali');

// Remove item from local storage
// localStorage.removeItem('name');
// localStorage.setItem('player', 'magi');
// localStorage.removeItem('player');

// localStorage.setItem('name','ali');
// localStorage.setItem('age','32');

// Get item from storage
// const name = localStorage.getItem('name');
// const age = localStorage.getItem('age');

// localStorage.clear();
// console.log(name, age);


// Add submit event
document.querySelector('form').addEventListener('submit', function(event){

   /// Get values from task input
   const task = document.querySelector('#task').value;

   // tasks :- array of tasks
   let tasks;

   // Check for already tasks in the storage
   if(localStorage.getItem('tasks') === null){
      tasks = [];
   } else {
      tasks = JSON.parse(localStorage.getItem('tasks'));
   }

   // Push the coming tasks into tasks array
   tasks.push(task);
   
   // Save new task in the storage
   localStorage.setItem('tasks',JSON.stringify(tasks));

   alert('Task saved');
   
   //localStorage.clear();

   // Prevent the defualt behavior
   event.preventDefault();
});


// Show up all tasks from the storage
const tasks = JSON.parse(localStorage.getItem('tasks'));
tasks.forEach(function(task){
 console.log(task);
});

 