function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books') // include a fetch request to the Game of Thrones API
  .then(response => {return response.json();}) // returned response should be converted to JSON
  .then(json => {renderBooks(json)}); // call the second function passing in the API's returned JSON data as the argument
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
