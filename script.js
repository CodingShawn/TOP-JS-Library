const addBookForm = document.getElementById("addBookForm");
const showBooksBtn = document.getElementById("showBooks");
const bookDisplay = document.getElementById("bookDisplay");

addBookForm.addEventListener("submit", addBook)
// showBooksBtn.addEventListener("click", showBooks);

let myLibrary = [];

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
    clearDisplay(); //Clear display so no duplicate books will be shown
    bookIndex = 0
    myLibrary.forEach(book => {
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

        let deleteBtn = showDeleteButton(bookIndex);
        bookWrapper.appendChild(deleteBtn);

        bookDisplay.appendChild(bookWrapper);
        bookIndex += 1;
    })
}

function clearDisplay() {
    bookDisplay.innerHTML = "";
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
    p3.addEventListener("click", updateReadStatus);
    p3.classList.add("read-status");
    p3.appendChild(readStatus);
    
    div.appendChild(p1).appendChild(p2).appendChild(p3);
    return div;
}

function showDeleteButton(bookIndex) {
    let btn = document.createElement("button");
    btn.textContent = "Delete book";
    btn.setAttribute('data-book-no', bookIndex);
    btn.addEventListener("click", deleteBook);
    return btn;
}

function deleteBook(e) {
    let bookIndex = e.target.getAttribute("data-book-no");
    myLibrary.splice(bookIndex, 1);
    showBooks();
}

function updateReadStatus(e) {
    let element = e.target;
    console.log(element.textContent);
    if (element.textContent === "Read") {
        element.textContent = "Unread";
    } else if (element.textContent === "Incomplete") {
        element.textContent = "Read";
    } else if (element.textContent === "Unread") {
        element.textContent = "Incomplete";
    }
}