function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books') // First we get our API url to retrive the information from the API 
  .then(resp => resp.json()) // Next, we take our json and convert it to an object we can manipulate
  .then(json => renderBooks(json)); // Finally, we pass our object into the renderBooks function we defined below.
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
