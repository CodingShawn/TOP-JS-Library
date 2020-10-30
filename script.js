
const newBookBtn = document.getElementById("addNewBook");
const showBooksBtn = document.getElementById("showBooks");
const bookDisplay = document.getElementById("bookDisplay")

newBookBtn.addEventListener("click", addBookToLibrary);
showBooksBtn.addEventListener("click", showBooks);

let myLibrary = [];

function Book(bookTitle) {
    this.title = bookTitle;
}

function addBookToLibrary() {
    let newBookTitle = prompt("Enter new book title");
    let newBook = new Book(newBookTitle);
    myLibrary.push(newBook);
}

function showBooks() {
    myLibrary.forEach(book => {
        let div = document.createElement("div");
        div.className += "book";
        let p = document.createElement("p");
        let title = document.createTextNode(book.title);
        p.appendChild(title);
        div.appendChild(title);
        bookDisplay.appendChild(div);
    })
}
