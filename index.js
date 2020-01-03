function fetchBooks() {

  return fetch('https://anapioficeandfire.com/api/books') // call on the api or place to pull data
    .then(response => response.json()) // turn data retrieved into json once u get something back
    .then(json => renderBooks(json)) // do something with the json

}

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

