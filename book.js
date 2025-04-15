// Book Constructor function
function Book(title, author, pages, read) {
  if (!new.target) {
    throw new Event("Book must be called with new");
  }
  this.read = read || false;

  this.title = title;
  this.author = author;
  this.pages = pages;
  this.info = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${
      this.read ? "read" : "not read yet"
    }`;
  };
}

// Creating a new Book instance
const book1 = new Book("1984", "George Orwell", 328, true);
const book2 = new Book("To Kill a Mockingbird", "Harper Lee", 281, false);

// Export the Book constructor and instances
module.exports = {
  Book,
  book1,
  book2,
};

console.log(book1.info()); // 1984 by George Orwell, 328 pages, read
console.log(book2.info()); // To Kill a Mockingbird by Harper Lee, 281 pages, not read yet

console.log(Object.getPrototypeOf(Book.prototype) === Object.prototype); //
console.log(book1.valueOf());
