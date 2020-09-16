function fetchBooks() {

  //empty function fetchBooks()
  //called when index.html is loaded 

  return fetch('https://anapioficeandfire.com/api/books') //include a fetch request to the game of thrones API 
  .then(resp => resp.json()) //returned response should be converted to JSON
  .then(json => renderBooks(json)); 
}

function renderBooks(json) { //call renderBooks function passing in the APIS JSON data as the argument 
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
