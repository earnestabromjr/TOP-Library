// Book Constructor function 
function Book(title, author, pages) {
    if (!new.target) {
        throw new Event("Book must be called with new");
    }
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.info = function() {
        return `${this.title} by ${this.author}, ${this.pages} pages`;
    }
}

// Creating a new Book instance
const book1 = new Book("1984", "George Orwell", 328);
const book2 = new Book("To Kill a Mockingbird", "Harper Lee", 281);

console.log(book1.info());
console.log(book2.info());
