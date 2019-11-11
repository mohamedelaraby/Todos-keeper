/*
[  @author ] ;- Muhammed alaraby
[  @Date   ] ;- 6/11/19
[  @Info   ] ;- Main Script
*/

// Get buttons 
const btn1  = document.querySelector('#button1');
const btn2 = document.getElementById('button2');

// Add Event listeners
btn1.addEventListener('click', loadComment);
btn2.addEventListener('click', loadUsers);


// Load Customer
function loadComment(e){

const xhr = new XMLHttpRequest();
    
xhr.open('GET', 'https://jsonplaceholder.typicode.com/comments', true);

xhr.onload = function(){
    if(this.status === 200){
       // Parse the output in Json format
       const comments = JSON.parse(this.responseText);
       let commentShow = '';
       comments.forEach(function(comment){
           commentShow += `
            <ul class="list-group">
                <li class="list-group-item">PostId: ${comment.postId}</li>
                <li class="list-group-item">ID: ${comment.id}</li>
                <li class="list-group-item">Name: ${comment.name}</li>
                <li class="list-group-item">Email: ${comment.email}</li>
                <li class="list-group-item">Body: ${comment.body}</li>
            </ul>
            <br><hr><br>
           `;
           
       });
     
        
      document.getElementById('customer').innerHTML = commentShow;
    }
}

xhr.send();


  
}

// Load Customers
function loadUsers(e){

    const xhr = new XMLHttpRequest();
    xhr.open('GET','https://jsonplaceholder.typicode.com/users', true);
    xhr.onload = function(){
        if(this.status === 200){
            const users = JSON.parse(this.responseText);

            let userDetails = '';

            users.forEach(function(user){

                userDetails +=`  
             
                <ul class="list-group">
                    <li class="list-group-item">Userid: ${user.id}</li>
                    <li class="list-group-item">Name: ${user.name}</li>
                    <li class="list-group-item">User name: ${user.username}</li>
                    <li class="list-group-item">Email: ${user.email}</li>
                    <li class="list-group-item">Phone: ${user.phone}</li>
                    <li class="list-group-item">Website: ${user.website}</li>
                </ul>
                <br><hr><br>
               
               `;
            });
            document.querySelector('#customers').innerHTML = userDetails;
        }
    }
    xhr.send();

    e.preventDefault();
}

