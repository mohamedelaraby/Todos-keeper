/*
[  @author ] ;- Muhammed alaraby
[  @Date   ] ;- 6/11/19
[  @Info   ] ;- Main Script
*/

// { Book Constructor } :- Handle and creating the actual book object
function Book (title,author,isbn){
   this.title = title;
   this.author = author;
   this.isbn = isbn;
}


// { UI Constructor } :-   a Set of prototype methods to do things like add, remove, modify book
function UI(){}

 // [ addBookToList ] :- adds new book to Books table
UI.prototype.addBookToList = function (book){
   
   // Get the books table HTML reference
   // [ list ]:- Books list table html reference
   const list =  document.querySelector('#book-list');

   // Create tr table element
   // [ row ];- new tr table element
   const row = document.createElement('tr');


   // Insert table columns
   row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
      <td><a class="delete-book"  href="#"><i class="fas fa-times "></i></a></td>
     
   `;
  
   // Add book to books table
   list.appendChild(row);

};


 // [ showErrorAlert ] :- show any error alert
 UI.prototype.showErrorAlert = function (message, className){
   // Create alert div
   const alertDiv = document.createElement('div');
   // Add Classes
   alertDiv.className = `alert ${className}`;
   // Add text
   alertDiv.appendChild(document.createTextNode(message));
   // Get parent
   const cardBody = document.querySelector('.card-body');
   // Get the form 
   const form = document.querySelector('#book-form');

   // Insert the alertDiv before the book form
   cardBody.insertBefore(alertDiv, form);

   // TimeOut after 3 seconds
   setTimeout(function(){
      document.querySelector('.alert').remove();
   }, 3000);

};


// [ DeleteBook ] :- Delet a Book
UI.prototype.deleteBook = function(){
   document.querySelector('.delete-book').parentElement.parentElement.remove(); 
   this.showErrorAlert('Book removed','alert-info');
};

 // [ clearFields ] :- Empties book inputs fields
 UI.prototype.clearFields = function (){
   document.getElementById('title').value = '';
   document.getElementById('author').value = '';
   document.getElementById('isbn').value = '';
 };



// The UI Events Variables
// [ bookForm ]:- Find the book form html element
const bookForm = document.querySelector('#book-form');

   // [ form listener ]:- Listens for the form inputs values
   bookForm.addEventListener('submit', function(e){

   // Get form values
   // [ titleInput ]:- Holds book title html element
   // [ authorInput ]:- Holds book author html element
   // [ isbnInput ]:- Holds book isbn html element
   const  titleInput = document.querySelector('#title').value,
          authorInput = document.querySelector('#author').value,
          isbnInput = document.querySelector('#isbn').value;
      
   // [ book ] :- New added Book
   const book = new Book(titleInput, authorInput, isbnInput);
   
  /*---- [ UI prototypes  ] -----*/ 
   // [ ui ] :- Instantiate UI constructor
   const ui = new UI();
 
   // Validate form inputs
   if(titleInput === '' || authorInput === '' || isbnInput === ''){
      // Error alert
      ui.showErrorAlert('Please fill in all fields', 'alert-danger');
   } else {
      // Add book to list
      ui.addBookToList(book);
      ui.showErrorAlert('Book added', 'alert-success');

      // Clear Fields
      ui.clearFields();
   }
  

 
     
   
 
   // prevent the default submit event
   e.preventDefault();
});


// Delete book event listener
document.getElementById('book-list').addEventListener('click', function(e){

 const ui = new UI();

 ui.deleteBook(e.target);


   e.preventDefault();
});
 

