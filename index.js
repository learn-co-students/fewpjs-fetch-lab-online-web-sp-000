document.addEventListener('DOMContentLoaded', function () {
  fetchBooks()
})

const fetchBooks = () => {
  console.log('get books')
  return fetch('https://anapioficeandfire.com/api/books')
    .then(r => r.json())
    .then(json => renderBooks(json))
}

const renderBooks = (json) => {
  const main = document.querySelector('main')
  json.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = `<h2>${book.name}</h2>`
    main.appendChild(h2)
  })
}