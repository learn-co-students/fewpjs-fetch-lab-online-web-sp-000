function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
  .then(resp => resp.json())
  .then(json => renderBooks(json))
}
// send fetch request to URL
// response should be converted to JSON
// call renderBooks function, passing in the JSON-converted response in as an argument to give access to the response for the next function to work.

function renderBooks(json) {
  const main = document.querySelector('main')
  json.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = `<h2>${book.name}</h2>`
    main.appendChild(h2)
  })
}


document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})
