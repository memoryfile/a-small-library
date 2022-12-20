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

const bookInfo = myLibrary.map(
  (Book) => `${Book.title} ${Book.author} ${Book.pages} ${Book.read}`
);
console.log(bookInfo);

function clearForm() {
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("pages").value = "";
  document.getElementById("read").value = "";
}

function addBookToLibrary() {
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  let read = document.getElementById("read").value;
  if (!(title = "") || !(author = "") || !(pages = "")) {
    myLibrary.push(new Book(title, author, pages, read));
    console.log(myLibrary);
    clearForm();
    updateCards();
    existingBooks();
  } else {
    alert("No");
  }
}

let list = document.getElementById("myList");

// WIP
function updateCards() {
  let list = document.getElementById("myList");
  list = "";
  existingBooks();
}

function existingBooks() {
  let li = document.createElement("li");
  li.innerText = bookInfo;
  list.appendChild(li);
}

// myLibrary.forEach((item) => {
//   let li = document.createElement("li");
//   li.innerText = bookInfo;
//   list.appendChild(li);
// });

existingBooks();
