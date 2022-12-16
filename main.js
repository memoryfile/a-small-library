function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  // this.sayTitle = function () {
  //   console.log(title);
  // };
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

let myLibrary = [malibu];

function addBookToLibrary() {
    myLibrary.push(seaOfTranquility);
    console.log(myLibrary);
  }

addBookToLibrary();
