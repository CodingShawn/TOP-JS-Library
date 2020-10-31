const addBookForm = document.getElementById("addBookForm");
const showBooksBtn = document.getElementById("showBooks");
const bookDisplay = document.getElementById("bookDisplay");
let bookIndex = 0;

addBookForm.addEventListener("submit", addBook)
showBooksBtn.addEventListener("click", showBooks);

let myLibrary = [];
let displayedBooks = [];

function Book(bookTitle, bookAuthor, bookPages, readStatus) {
    this.title = bookTitle;
    this.author = bookAuthor;
    this.bookPages = bookPages;
    this.readStatus = readStatus;
}

function addBook(event) {
    event.preventDefault();  
    let bookTitle = document.getElementById("title").value;
    let bookAuthor = document.getElementById("author").value;
    let bookPages = document.getElementById("pages").value;
    let readStatus = document.getElementById("readStatus").value;
    let newBook = new Book(bookTitle, bookAuthor, bookPages, readStatus);
    myLibrary.push(newBook);
    addBookForm.reset();  
    showBooks();
}

function showBooks() {
    myLibrary.forEach(book => {
        if (!displayedBooks.includes(book)) {
            let bookWrapper = document.createElement("div");
            bookWrapper.classList.add("book-wrapper");
            let div = document.createElement("div");
            div.classList.add("book")
            let p = document.createElement("p");
            let title = document.createTextNode(book.title);
            p.appendChild(title);
            div.appendChild(title);
            bookWrapper.appendChild(div);

            let bookInfo = showBookInfo(book);
            bookWrapper.appendChild(bookInfo);

            bookDisplay.appendChild(bookWrapper);
            displayedBooks.push(book);
        }
    })
}

function showBookInfo(book) {
    let div = document.createElement("div");

    let p1 = document.createElement("p");
    let authorInfo = document.createTextNode("Written by: " + book.author);
    p1.appendChild(authorInfo);
    let p2 = document.createElement("p");
    let pagesInfo = document.createTextNode("Pages: " + book.bookPages);
    p2.appendChild(pagesInfo);
    let p3 = document.createElement("p");
    let readStatus = document.createTextNode(book.readStatus);
    p3.appendChild(readStatus);
    div.appendChild(p1).appendChild(p2).appendChild(p3);
    return div;
}
