function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books")
    .then(resp => resp.json())
    .then(json => renderBooks(json))
    .then(json => renderPageCount(json))
}

function renderBooks(json) {
  const main = document.querySelector('main')
  json.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = `<h2>${book.name}</h2>`
    main.appendChild(h2)
  })
}

function renderPageCount(json) {
  const pages = document.querySelector('main')
  json.forEach(book => { 
    const p = document.createElement('p')
    p.innerHTML = `<p>${book.numberOfPages}<p>`
    main.appendChild(p)
  })
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})
