const myLibrary = [];
const libraryContainer = document.querySelector(".libraryContainer");


// Book Constructor function
function Book(title, author, pages, read) {
  if (!new.target) {
    throw new Event("Book must be called with new");
  }
  this.read = read || false;
  this.id = crypto.randomUUID();

  this.title = title;
  this.author = author;
  this.pages = pages;
  this.info = function() {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? "read" : "not read yet"
      }`;
  };
}

function addBookToLibrary(title, author, pages, read = false, library = myLibrary) {
  const book = new Book(title, author, pages, read);
  for (const existingBook of library) {
    if (existingBook.id === book.id) {
      throw new Error("Book with this ID already exists in the library.");
    }
  }
  library.push(book);
}

// Display library contents
function displayLibrary(library = myLibrary) {
  libraryContainer.innerHTML = ""; // Clear previous contents
  library.forEach(book => {
    const bookElement = document.createElement("div");
    bookElement.className = "book";
    bookElement.textContent = book.info();
    libraryContainer.appendChild(bookElement);
  });
}


// Creating a new Book instance
const book1 = new Book("1984", "George Orwell", 328, true);
const book2 = new Book("To Kill a Mockingbird", "Harper Lee", 281, false);
myLibrary.push(book1, book2);
displayLibrary(myLibrary);

console.log(Object.getPrototypeOf(Book.prototype) === Object.prototype); //
console.log(book1.valueOf());
