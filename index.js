// import fetch from "cross-fetch";
// const fetch = require("node-fetch");
function fetchBooks() {
  fetch("https://anapioficeandfire.com/api/books")
    .then((resp) => resp.json())
    // .then((json) => console.log(json));
    // .then((json) => renderBooks(json)
    .then((json) => renderFive(json));
}

function renderBooks(json) {
  const main = document.querySelector("main");
  json.forEach((book) => {
    const h2 = document.createElement("h2");
    h2.innerHTML = `<h2>${book.name}</h2>`;
    main.appendChild(h2);
  });
}

// show the 5th book in the series
function renderFive(json) {
  const main = document.querySelector("main");
  // console.log(json.length);
  // console.log(json.keys);
  // console.log(json);
  // console.log(json[6]);
  const fifthBook = document.createElement("h2");
  const bookUrl = document.createElement("h2");
  fifthBook.innerHTML = `<h2>Fifth Book Title: ${json[6].name}</h2>`;
  bookUrl.innerHTML = `<h2>Fifth Book Url: ${json[6].url}</h2>`;
  main.appendChild(fifthBook);
  main.appendChild(bookUrl);
  // json.books[6];

  // const main = document.querySelector("main");
  // json[1];
  // .forEach((book) => {
  // const h2 = document.createElement("h2");
  // h2.innerHTML = `<h2>${book.name}</h2>`;
  // h2.innerHTML = `<h2>${book.name}</h2>`;
  // main.appendChild(h2);
  // });
}

document.addEventListener("DOMContentLoaded", function () {
  fetchBooks();
});
