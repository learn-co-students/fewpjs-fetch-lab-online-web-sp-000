function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books") // when you fetch this url, it returns you a promise.
    .then(function (response) {
      // Inside the promise is a promise value of "response"
      return response.json(); // we return the response.json();
    })
    .then(function (json) {
      // which gives us each book, nested in JSON format. We have an argument of json.
      renderBooks(json); //render books will take each book and make its name into a h2.
    });
}

function renderBooks(json) {
  const main = document.querySelector("main");
  json.forEach((book) => {
    const h2 = document.createElement("h2");
    h2.innerHTML = `<h2>${book.name}</h2>`;
    main.appendChild(h2);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  fetchBooks();
});
