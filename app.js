let addBookBtns = document.querySelector(".addBook");
let addNewBook = document.querySelector(".addBookBtn");
const checkboxes = document.querySelector('input[name="read"]');
let books = document.querySelector(".books");

let library = JSON.parse(localStorage.getItem("stuff")) || [];


class Book {
constructor(title,author,pages,checkboxes){
 this.title = title;
 this.author = author;
 this.pages = pages;
 this.checkboxes = checkboxes;
}
 createBook(){
  
  const bookTitle = document.querySelector('input[name="title"]').value;
  const bookAuthor = document.querySelector('input[name="author"]').value;
  const pages = document.querySelector('input[name="pages"]').value;

 
  if(bookTitle !== "" && bookAuthor !== "" & pages !== ""){
    let deleteBtn = document.createElement("button");
    let isRead = document.createElement("button");

    var modal = document.getElementById("myModal");
     
    modal.style.display = "none";

    library.push([
      new Book(bookTitle, bookAuthor, pages, checkboxes),
      deleteBtn,
      isRead,
    ]);

    console.log(library);

    //Create the card dynamically

    let card = document.createElement("div");
    let title = document.createElement("h2");
    let author = document.createElement("h2");
    let numPages = document.createElement("h2");


    card.className = "card";

     localStorage.setItem('card', card);



    title.textContent = bookTitle;

    title.style.fontSize = "24px";

    author.textContent =   bookAuthor;

    numPages.textContent =  pages;

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



    //local storage data//
    localStorage.setItem('stuff', JSON.stringify(library)); 


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

else{
  alert('please enter values in the fields below');
  var modal = document.getElementById("myModal");
  modal.style.display = "block";
  
  
}

 }

 addBookToLibrary(){
    for(let i = 0; i < library.length; i++){

    }
    
 }

}

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



  const showData = () => {
   
   let storage = JSON.stringify(localStorage.getItem('stuff'));
   
   
  }



  let book = new Book();


  addBookBtns.addEventListener("click", openModal);

  addNewBook.addEventListener("click", e => {
    var modal = document.getElementById("myModal");
    book.createBook();

  });


  window.onload = showData;


