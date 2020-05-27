function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
  .then(function(response) {
    return response.json();
  })
.then(function(json) {
  renderBooks(json);
})
};

// Or I can use the  => like in line 16 & 17 which implies the then allowing me to remove the return in line 4


// function fetchBooks() {
//   return fetch("https://anapioficeandfire.com/api/books")
//     .then(resp => resp.json())
//     .then(json => renderBooks(json))
// }


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
