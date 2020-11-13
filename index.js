function fetchBooks(){
  return fetch('https://anapioficeandfire.com/api/books')
  .then(resp => resp.json())
  .then(json => renderBooks(json));
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

//The 5th book in the series
function render5thBook(json){
  const main = document.querySelector('main')
  const h2 = document.createElement('h2')

  h2.innerHTML = `<h2>${json[4].name}</h2>`
  main.appendChild(h2)  
}
//The 1031st character in the series

function rende1031Character(json){
  const main = document.querySelector('main')
  const h2 = document.createElement('h2')

  let allCharacters=[]
  json.forEach(Book=>{
    allCharacters = [...allCharacters,...Book.characters]
  })
  
fetch(allCharacters[1030])
.then(function(response) {
  return response.json();
})
.then(function(json) {
  h2.innerHTML = `<h2>${json.name}</h2>`
  main.appendChild(h2)  
});
  
}
//The total number of pages of all the books

function totalPages(json){
  const main = document.querySelector('main')
  const h2 = document.createElement('h2')

  pageNumber = 0
  json.forEach(Book=>{
    pageNumber = pageNumber + Book.numberOfPages
  })

  h2.innerHTML = `<h2>${pageNumber}</h2>`
  main.appendChild(h2) 
 
}
