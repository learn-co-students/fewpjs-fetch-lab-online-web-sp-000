const select_main = document.querySelector('main');

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
  
})

function fetchBooks() {
  fetch('https://anapioficeandfire.com/api/books')
  .then(resp => resp.json())
  .then(result => {
    const books = result;
    for (let i=0; i < result.length; i++){
      const books = books[i];
      const book_name = books.name;
      const h2 = document.createElement('h2');
      h2.textContent = book_name;
      select_main.appendChild(h2);
    }
  });
}




// function fetchBooks() {
//   return fetch('https://anapioficeandfire.com/api/books')
//   .then(resp => resp.json())
//   .then(json => renderBooks(json));
  
// }

// function renderBooks(json) {
//   const main = document.querySelector('main')
//   json.forEach(book => {
//     const h2 = document.createElement('h2')
//     h2.innerHTML = `<h2>${book.name}</h2>`
//     console.log(book.name);
//     main.appendChild(h2)
//   })
// }


