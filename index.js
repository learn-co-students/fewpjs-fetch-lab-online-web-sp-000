// The tests in this lab need access to the fetch() request inside fetchBooks(). In order to give them access,
//  write you solution so that fetchBooks() returns the fetch(). 

function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books")
  // returned response should be converted to JSON. 
  .then(resp => resp.json()) 
  //  call the second function, renderBooks(), passing in the API's returned JSON data as the argument.
  .then(json => renderBooks(json))
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
