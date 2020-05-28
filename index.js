function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
    .then(function(response){
      return response.json();
    })
    .then(function(json) {
      //console.log(json)
      renderBooks(json)
    });

}

function renderBooks(json) {
  const main = document.querySelector('main')
  json.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = `${book.name}`
    main.appendChild(h2)
    console.log(h2.innerHTML)
  })
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})

//huhwhwat?