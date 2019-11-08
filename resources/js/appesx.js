/*
[  @author ] ;- Muhammed alaraby
[  @Date   ] ;- 7/11/19
[  @Info   ] ;- Main Script using ES6
*/


// { Book Class } :- Handle and creating the actual book object

class Book {
    constructor(title,author,isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

// { UI Class } :-   a Set of methods to do things like add, remove, modify book

class UI {
    
    // [ addBookToList ] :- adds new book to Books table
    addBookToList(book){
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

   //  Show confirmtion alert
   this.showErrorAlert('Book added', 'alert-success');


}

 


// [ deleteBook ] :- Delet a Book from the list
    deleteBook(){
        document.querySelector('.delete-book').parentElement.parentElement.remove(); 
        this.showErrorAlert('Book removed','alert-info');
    }

 // [ clearFields ] :- Empties book inputs fields
   clearFields(){
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
   }

// [ showErrorAlert ] :- show any error alert
showErrorAlert(message, className){
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
 }


// .../ UI class end brackets
}

// { Store } :-  Handles books in local storage
class Store {
    // [ getBooks ] :- Fetchs books from local storage
    static getBooks(){
        let books;
        if(localStorage.getItem('books') === null){
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem('books'));
        }

        return books; 
    }

    // [ displayBooks] ;- Show books from local storage
    static displayBooks(){
        // Gets books from LS
      const books = Store.getBooks();

      books.forEach(function(book){
        const ui = new UI();
         
        // Add book to UI
        ui.addBookToList(book);
      });
    }

    // [ addBook ] ;- Adds new book To local storage
    static addBook(book){

        // Get book from local storage
        const books  = Store.getBooks();
        //put book into books array
        books.push(book);
        // Store in Ls
        localStorage.setItem('books', JSON.stringify(books));
    }

    // [ removeBook ] ;- remove books from local storage
    static removeBook(isbn){
            let books = Store.getBooks();

            books.forEach(function(book, index){
               if(book.isbn === isbn){
                  books.splice(index,1);
                  books = [];
               }
            });

            localStorage.setItem('books', JSON.stringify(books));
    }


}


// DOM Load event listener
document.addEventListener('DOMContentLoaded', Store.displayBooks);


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
   
  /*---- [ UI Class  ] -----*/ 
   // [ ui ] :- Instantiate UI class
   const ui = new UI();
 
   console.log(ui);
   // Validate form inputs
   if(titleInput === '' || authorInput === '' || isbnInput === ''){
      // Error alert
      ui.showErrorAlert('Please fill in all fields', 'alert-danger');
   } else {
      // Add book to list
      ui.addBookToList(book);

      // Add to local storage
      console.log(Store.addBook(book));

      // Clear Fields
      ui.clearFields();
   }
  

 
     
   
 
   // prevent the default submit event
   e.preventDefault();
});


// Delete book event listener
document.getElementById('book-list').addEventListener('click', function(e){

 const ui = new UI();
  ui.deleteBook();

  Store.removeBook(document.querySelector('.delete-book').parentElement.previousElementSibling.textContent);


   e.preventDefault();
});
 