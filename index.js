function fetchBooks() {
  //debugger;
  return fetch('https://anapioficeandfire.com/api/books')
  .then(resp => resp.json())
  .then(json => renderBooks(json));
  
}

function renderBooks(json) {
  const main = document.querySelector('main')
  //debugger;
  json.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = `<h2>${book.name}</h2>`
    main.appendChild(h2)
  })
}

// function getPosts() {
//   fetchBooks()
// }

document.addEventListener('DOMContentLoaded', function() {
  renderBooks(fetchBooks())
  //renderBooks()
  //window.renderBooks
})
