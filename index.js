function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books');

}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
  .then(resp => resp.json())
  .then(json => renderBooks(json)
    )
});


// fetch('https://anapioficeandfire.com/api/books')
//   .then(resp => resp.json())
//   .then(json => {
//     let sumOfPages = 0;
//     json.forEach((book, relatedHash) => sumOfPages += parseInt(relatedHash["numberOfPages"], 10))
//     console.log(sumOfPages);
// });
