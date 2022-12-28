const body = document.body;

const layout = document.querySelector(".layout");
const cards = document.querySelectorAll(".card");
const card = document.querySelector(".card");

const newCards = document.createElement("div");
const cardText = document.createElement("p");

layout.appendChild(newCards);
newCards.appendChild(cardText);

// cardText.style.
cardText.style.gap = `8px`;
cardText.style.display = `grid`;

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

let myLibrary = [malibu, seaOfTranquility];

// Push and pop from this array as you get books from myLibrary and input them into the cards.
let currentBook = [];

const bookInfo = myLibrary.map(
  (Book) => `${Book.title} ${Book.author} ${Book.pages} ${Book.read}`
);

const bookTitle = myLibrary.map(
  (Book) => `${Book.title}`
);

const bookAuthor = myLibrary.map(
  (Book) => `${Book.author}`
);

const bookPages = myLibrary.map(
  (Book) => `${Book.pages}`
);

const bookRead = myLibrary.map(
  (Book) => `${Book.read}`
);

let text = document.createTextNode(bookInfo);
cardText.appendChild(text);

function logLibrary() {
  console.log("Here's the library:", myLibrary);
}

function createBook() {
  myLibrary.push(new Book(title, author, pages, read));
}

// Grab last book in (immutable) myLibrary array
function isolateBook() {
  logLibrary();
  currentBook.push(myLibrary.slice(-1));
  myLibrary.pop();
  console.log(currentBook);
}

// WIP, currentBook isn't defined because only isolateBook interfaces with it on an array level
// let bookTitle = currentBook[0].title;

let test = "hi";

function addBookToLibrary() {
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  let read = document.getElementById("read").value;
  if (!(title == "" || author == "" || pages == "")) {
    myLibrary.push(new Book(title, author, pages, read));
    createCard();
    // layout.querySelector('ul').append(...myLibrary.map(createCard));
    isolateBook();
    clearForm();
  } else {
    alert("Please fill out every form entry.");
  }
}

function clearForm() {
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("pages").value = "";
  document.getElementById("read").value = "";
}

function removeBook() {
  myLibrary.pop();
  console.log("Removing the last book in the array.");
  logLibrary();
}

function createCard() {
  const newCards = document.createElement("newCards");

  // Define newCards CSS
  newCards.style.border = `medium dashed black`;
  newCards.style.backgroundColor = `#69d2e7`;
  newCards.style.borderRadius = `5px`;
  newCards.style.margin = `10px`;
  newCards.style.maxHeight = `500px`;

  console.log("Created a new card.");
}