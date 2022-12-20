let wholeArrayList = document.getElementById("myList");
let lastCardList = document.getElementById("card2");
let layoutList = document.querySelectorAll("ul > li:last-child");

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

const malibu = new Book(
  "Malibu Rising",
  "Taylor Jenkins Reid",
  "369 pages",
  "Not read"
);

const seaOfTranquility = new Book(
  "Sea of Tranquility",
  "Emily St. John Mandel",
  "255 pages",
  "Not read"
);

// Array

let myLibrary = [malibu, seaOfTranquility];

let myLibrarysLastItem = myLibrary.slice(-1);

// Library array mapping

const bookInfo = myLibrary.map(
  (Book) => `${Book.title} ${Book.author} ${Book.pages} ${Book.read}`
);
console.log(bookInfo);
// Use bookInfo.length to auto-generate # of cards.
console.log(bookInfo.length);

const cardBookInfo = myLibrary.map(
  (Book) =>
    `Title: ${Book.title} \n Author: ${Book.author} \n Total pages in book: ${Book.pages} \n Finished?: ${Book.read} \n \n`
);

const itemBookInfo = myLibrarysLastItem.map(
  (Book) =>
    `Title: ${Book.title} \n Author: ${Book.author} \n Total pages in book: ${Book.pages} \n Finished?: ${Book.read}`
);

// Functions

function clearForm() {
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("pages").value = "";
  document.getElementById("read").value = "";
}

// Adds a book to the array and clears the form inputs. WIP: check for empty form.
function addBookToLibrary() {
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  let read = document.getElementById("read").value;
  if (!(title = "") || !(author = "") || !(pages = "")) {
    myLibrary.push(new Book(title, author, pages, read));
    console.log(myLibrary);
    clearForm();
    // updateCards();
    existingBooks();
  } else {
    alert("No");
  }
}

// Provides a legible list of all array items and adds it to a card.
function existingBooks() {
  let wholeList = document.createElement("li");
  wholeList.innerText = cardBookInfo;
  wholeArrayList.appendChild(wholeList);
}

// Provides the last array item and adds it to a card.
function addBookToLastCard() {
  let wholeList = document.createElement("li");
  wholeList.innerText = itemBookInfo;
  lastCardList.appendChild(wholeList);
}

// Generate new cards with values mapped to array values.
function newCard() {
  
}

// WIP - clears list of books and adds updated array list back.
// function updateCards() {
//   wholeArrayList = "";
//   existingBooks();
// }

// myLibrary.forEach((item) => {
//   let li = document.createElement("li");
//   li.innerText = bookInfo;
//   list.appendChild(li);
// });

// Functions to initialize web page with.

// To show list of books on last card.
existingBooks();
// To add last value in the array to card 2.
addBookToLastCard();
