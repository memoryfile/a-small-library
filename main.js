const body = document.body;

const layout = document.querySelector(".layout");
const cards = document.querySelectorAll(".card");
const card = document.querySelector(".card");
// layout.append(card);

const cardsText = document.getElementById("cardText");

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

function logLibrary() {
  console.log("Here's the library", myLibrary);
}

let bookTitle = myLibrary[0].title;

function addBookToLibrary() {
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  let read = document.getElementById("read").value;
  if (!(title == "" || author == "" || pages == "")) {
    myLibrary.push(new Book(title, author, pages, read));
    console.log(myLibrary);
    cardsText.append(bookTitle);
    clearForm();
  } else {
    alert("Please fill out every form entry.");
  }
}

// Reimplement working functions and simplify them

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

function createCard() {}
