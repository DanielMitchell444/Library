let addBookBtns = document.querySelector('.addBook');
let addNewBook = document.querySelector('.addBookBtn');
const checkboxes = document.querySelector('input[name="read"]');

let library = [];


//Constructor //
function Book(title, author, pages, read){

this.title = title;
this.author = author;
this.pages = pages;
this.read = read;

}


function addBookToLibrary(){
  
  ///Input values
  const bookTitle = document.querySelector('input[name="title"]').value;
  const bookAuthor = document.querySelector('input[name="author"]').value;
  const pages = document.querySelector('input[name="pages"]').value;
  let checkboxes = document.getElementById('checkbox');
  let books = document.querySelector('.books');
   
  //Push book inputs to array if conditions are met
  if(bookTitle !== "" && bookAuthor !== "" && pages !== ""){
    
    let deleteBtn = document.createElement('button');
    let isRead = document.createElement('button');

    library.push([new Book(bookTitle, bookAuthor, pages, checkboxes), deleteBtn, isRead]);

    console.log(library)

    //Create the card dynamically

    let card = document.createElement('div');
    let title = document.createElement('h1');
    let author = document.createElement('div');
    let numPages = document.createElement('div');
  


    card.classList.add('card');

    title.textContent = bookTitle;

    author.textContent = bookAuthor;

    numPages.textContent = pages;

    deleteBtn.textContent = "Delete Book";

    deleteBtn.classList.add("deleteBtn");


    deleteBtn.style.width = "200px";

    deleteBtn.style.height = "25px";

    isRead.style.width = "200px";
    isRead.style.height = "25px";

    isRead.textContent = "Read"

    isRead.id = "isRead";

    isRead.classList.add('isRead');


    title.classList.add('title');

  

    author.classList.add('author');
   

    //Push the created card on the screen ///
  

    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(numPages);
    card.appendChild(deleteBtn);
    card.appendChild(isRead);

    books.appendChild(card);


  //Code for delete button //
deleteBtn.addEventListener('click', event => {
  event.target.parentNode.remove();

  library = library.filter(v => v[1] !== event.target);
})

//Code to toggle read button //
  isRead.addEventListener('click', () => {
    if(isRead.textContent == "Read"){
      isRead.textContent = " Not Read";

    } else {
     isRead.textContent = "Read";
    }
  })


//Code for check boxes
  checkboxes.addEventListener('change', () => {
   if(document.getElementById('checkbox').checked){
     isRead.textContent = "Read";
   } 

   isRead.textContent = "Not Read";
  })
    
  }
  }

//Code to display books //
function displayBook(){
 for(let i = 0; i < library.length; i++){
     
 }   
}






function openModal(){
 // Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var addBookBtn = document.querySelector(".addBook");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
addBookBtn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
}

addBookBtns.addEventListener('click', openModal);

addNewBook.addEventListener('click', addBookToLibrary);



