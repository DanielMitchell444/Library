let modal = document.querySelector('.modal');
let addBtn = document.querySelector('.addBtn');
let closeBtn = document.querySelector('.close');
let addBookBtn = document.querySelector('.add');
let content = document.querySelector('.content')



let myLibrary = [
{title: "Book",
author: "JK-ROWLING",
pages: "500",
isRead: true
 
}];

function Book(title, author, pages, isRead){
 this.title = title;
 this.author = author;
 this.pages = pages;
 this.isRead = isRead;
}

function openModal(){
 modal.style.display = "block";
}

function closeModal(){
modal.style.display = "none";
}

function addNewBook(){
let titleInput = document.querySelector('.title').value;
let authorInput = document.querySelector('.author').value;
let pages = document.querySelector('.pages').value;
let isRead = document.querySelector('.isRead');

const book1 = new Book(titleInput, authorInput, pages, isRead);

let cardDiv = document.createElement('div');
let title = document.createElement('h1');
let author = document.createElement('h1');
let pagesValue = document.createElement('h1');
let isReadValue = document.createElement('button');
let removeBtn = document.createElement('button');

cardDiv.classList.add('cardDiv');

title.innerHTML = book1.title;
author.innerHTML = book1.author;
pagesValue.innerHTML = book1.pages;
isReadValue.innerHTML = book1.isRead;
removeBtn.innerHTML = "Remove Book";
removeBtn.className = "removeBtn";

cardDiv.appendChild(title);
cardDiv.appendChild(author);
cardDiv.appendChild(pagesValue);
cardDiv.appendChild(isRead);
cardDiv.appendChild(removeBtn);

content.appendChild(cardDiv);

myLibrary.push(book1);

console.log(myLibrary);

let buttonRemove = document.querySelector('.removeBtn');

buttonRemove.addEventListener('click', (e) => {
 e.target.parentNode.remove();
 myLibrary = myLibrary.filter(array => array[1] !== e.target);
})




}


function addBookToLibrary(){
 myLibrary.forEach(item => {
  console.log(item);
 })
}

addBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
addBookBtn.addEventListener('click', addNewBook);

addBookToLibrary();

