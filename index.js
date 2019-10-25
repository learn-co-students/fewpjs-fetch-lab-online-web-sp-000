function fetchBooks() {
  const response = fetch("https://anapioficeandfire.com/api/books");
  const json = response.then(resp => resp.json());
  return json.then(json => renderBooks(json));
}

function renderBooks(json) {
  const main = document.querySelector("main");
  json.forEach(book => {
    const h2 = document.createElement("h2");
    h2.innerHTML = `<h2>${book.name}</h2>`;
    main.appendChild(h2);
  });
}

document.addEventListener("DOMContentLoaded", function() {
  fetchBooks();
});
