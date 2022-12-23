let wholeArrayList = document.getElementById("myList");
let cards = document.getElementById("cardText")
let layout = document.getElementById("layout")
let list = document.createElement("li");

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

let length = myLibrary.length;

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

// Returns the last item in the array's info.
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
  if (!(title == "" && author == "" && pages == "")) {
    myLibrary.push(new Book(title, author, pages, read));
    console.log(myLibrary);
    clearForm();

    // updateCards();
    // existingBooks();
    
    // Alert seems to not be functioning
  } else {
    alert("No");
  }
}

// Provides a legible list of all array items and adds it to a card.
// function existingBooks() {
//   list.innerText = cardBookInfo;
//   cards.appendChild(list);
// }

// Provides the last array item and adds it to a card.
// function fillCards() {
//   list.innerText = itemBookInfo;
//   for (let i = 0; i < myLibrary.length; i++) {
//     list += myLibrary[i];
//     cards.append(itemBookInfo);
//     } 
  // list.innerText = itemBookInfo;
  // myLibrary.forEach(length => cards.appendChild(list));
// }

// Generate new cards with values mapped to array values.
function newCard() {}

// function clearCards() {
//   cards.appendChild("");
// }

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
// existingBooks();

// To fill each card with info.
fillCards();

// function addtoLayout() {
//   layout.createElement("li");
// }

// addtoLayout();