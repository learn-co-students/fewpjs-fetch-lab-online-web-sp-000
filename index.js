function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
  //returns the json structure
  .then(resp => resp.json())
  //logs the data while calling renderBooks
  .then(json => renderBooks(json));
}

function renderBooks(json) {
  const main = document.querySelector('main')
  json.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = `<h2>${book.name}</h2>`
    main.appendChild(h2)
  })
}

//using 'DOMContentLoaded' to load html first
document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})
