let addBookBtns = document.querySelector(".addBook");
let addNewBook = document.querySelector(".addBookBtn");
let title1 = document.querySelector('#titleInput').value;
let authorInput = document.querySelector('#authorInput').value;
let pages = document.querySelector('#pagesInput').value;
const checkboxes = document.querySelector('input[name="read"]');
const books = document.querySelector('.books');

let library = [];

function Book(title, author,pages){
  this.title = title
  this.author = author
  this.pages = pages;
 }







  addNewBook.addEventListener('click', (e) => {
    let title1 = document.querySelector('#titleInput').value;
    let authorInput = document.querySelector('#authorInput').value;
    let pages = document.querySelector('#pagesInput').value;
    let deleteBtn = document.createElement("button");
    let isRead = document.createElement("button");

    
    
   let book = new Book(title1, authorInput, pages)
   library.push(book);
   console.log(library)


   //Create Card //

   
   
   let card = document.createElement("div");
   let title = document.createElement("h2");
   let author = document.createElement("h2");
   let numPages = document.createElement("h2");


   card.className = "card";

    localStorage.setItem('card', card);



   title.textContent = book.title;

   title.style.fontSize = "24px";

   author.textContent =   book.author;

   numPages.textContent =  book.pages;

   deleteBtn.classList.add('deleteBtn');

   deleteBtn.textContent = "Delete Book";

   isRead.textContent = "Read";

   isRead.classList.add('isRead');

   isRead.id = "isRead";

   

  

   //Push the created card on the screen ///

   card.appendChild(title);
   card.appendChild(author);
   card.appendChild(numPages);
   card.appendChild(deleteBtn);
   card.appendChild(isRead);

   books.appendChild(card);

   
       //Code for delete button //
       deleteBtn.addEventListener("click", (event) => {
        event.target.parentNode.remove();
  
        library = library.filter((v) => v[1] !== event.target);
      });
  
      //Code to toggle read button //
      isRead.addEventListener("click", () => {
        if (isRead.textContent == "Read") {
          isRead.textContent = " Not Read";
        } else {
          isRead.textContent = "Read";
        }
      });
  
      //Code for check boxes
      checkboxes.addEventListener("change", () => {
        if (document.getElementById("checkbox").checked) {
          isRead.textContent = "Read";
          localStorage.setItem('read', isRead)
        }
  
        isRead.textContent = "Not Read";
      });

}
   




  )

  


  function openModal() {
    // Get the modal
    var modal = document.getElementById("myModal");
  
    // Get the button that opens the modal
    var addBookBtn = document.querySelector(".addBook");
  
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
  
    // When the user clicks on the button, open the modal
    addBookBtn.onclick = function () {
      modal.style.display = "block";
    };
  
    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
      modal.style.display = "none";
    };
  
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
  }






 


  addBookBtns.addEventListener("click", openModal);




