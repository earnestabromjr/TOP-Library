const myLibrary = [];
const libraryContainer = document.querySelector(".libraryContainer");
const form = document.querySelector("#bookFormID");

const buttons = {
  addBook: document.querySelector("#addBookButton"),
  closeForm: document.querySelector("#closeFormButton"),
  submitForm: document.querySelector("#submitButton"),
};
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

// Add function to toggle read status
Book.prototype.toggleRead = function() {
  this.read = !this.read;
};

function addBookToLibrary(title, author, pages, read = false, library = myLibrary) {
  const book = new Book(title, author, pages, read);
  for (const existingBook of library) {
    if (existingBook.id === book.id) {
      throw new Error("Book with this ID already exists in the library.");
    }
  }
  library.push(book);
}

// Add a new book event handler to add a book to the library
buttons.addBook.addEventListener("click", (event) => {
  form.style.display = "block";
});

// Close form event handler
buttons.closeForm.addEventListener("click", (event) => {
  form.style.display = "none";
});

// Submit form event handler to add a book to the library
buttons.submitForm.addEventListener("click", (event) => {
  event.preventDefault(); // Prevent form submission
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const pages = parseInt(document.querySelector("#pages").value, 10);
  const read = document.querySelector("#read").checked;

  try {
    addBookToLibrary(title, author, pages, read);
    displayLibrary();
    form.reset(); // Reset the form fields
    form.style.display = "none"; // Hide the form after submission
  } catch (error) {
    console.error(error.message);
  }
});

// Display library contents
function displayLibrary(library = myLibrary) {
  libraryContainer.innerHTML = ""; // Clear previous contents
  library.forEach(book => {
    const bookElement = document.createElement("div");
    const removeButton = document.createElement("button");
    removeButton.className = "removeButton";
    removeButton.type = "button"; // Ensure it's a button type
    const readStatusBox = document.createElement("input")
    readStatusBox.type = "checkbox";
    readStatusBox.addEventListener("change", () => {
      book.toggleRead();
      displayLibrary(); // Refresh the library display
    })
    bookElement.className = "book";
    bookElement.id = book.id; // Set the ID for easy removal later
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", () => {
      removeBookFromLibrary(book.id);
      displayLibrary(); // Refresh the library display
    });
    bookElement.textContent = book.info();
    libraryContainer.appendChild(bookElement);
    bookElement.appendChild(removeButton);
    bookElement.appendChild(readStatusBox);
  });
}

function removeBookFromLibrary(bookId, library = myLibrary) {
  const index = library.findIndex(book => book.id === bookId);
  if (index !== -1) {
    library.splice(index, 1);
  } else {
    console.error("Book not found in the library.");
  }
}


// Creating a new Book instance
const book1 = new Book("1984", "George Orwell", 328, true);
const book2 = new Book("To Kill a Mockingbird", "Harper Lee", 281, false);
myLibrary.push(book1, book2);
displayLibrary(myLibrary);

console.log(Object.getPrototypeOf(Book.prototype) === Object.prototype); //
console.log(book1.valueOf());
