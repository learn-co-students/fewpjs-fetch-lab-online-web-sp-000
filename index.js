
let url = 'https://anapioficeandfire.com/api/books'

function fetchBooks() {
  getPosts()
  return fetch(url)
  .then(function(response) {
    return response.json() 
 })  
 
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


function getPosts(){
  return fetch(url)
  .then(function(response) {
    return response.json() 
 }).then(function(data){
  renderBooks(data)
 })
 
  
}