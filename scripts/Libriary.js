export class Libriary {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
    this.displayBooks();
  }

  removeBook(index) {
    this.books.splice(index, 1);
    this.displayBooks();
  }

  displayBooks() {
    const bookList = document.querySelector("#book-list");
    bookList.textContent = "";

    this.books.forEach((book, index) => {
      const bookItem = document.createElement("div");
      bookItem.classList.add("book-item");

      const bookContent = document.createElement("span");
      bookContent.textContent = `${book.title} от ${book.author}`;

      const removeBook = document.createElement("button");
      removeBook.textContent = "remove";
      removeBook.addEventListener("click", () => {
        this.removeBook(index);
      });

      bookItem.append(bookContent, removeBook);
      bookList.append(bookItem);

   });
  }
}
