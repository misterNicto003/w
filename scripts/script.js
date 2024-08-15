import "../style.css";
import { Book } from "./Book";
import { Libriary } from "./Libriary";

const bookForm = document.querySelector("#book-form");

const libriary = new Libriary();

bookForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const title = document.querySelector("#title");
  const author = document.querySelector("#author");

  const book = new Book(title.value, author.value);

  libriary.addBook(book);
  author.value = "";
  title.value = "";
});
