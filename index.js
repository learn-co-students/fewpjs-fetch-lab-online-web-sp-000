//original file contents:
function fetchBooks() {
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












//this works in the consle up to const name = book.name;

//const select_main = document.querySelector('main');

// fetch('https://anapioficeandfire.com/api/books')
//   .then(resp => resp.json())
//   .then(result => {
//     const books = result;
//     for (let i=0; i < books.length; i++){
//       const book = books[i];
//       const name = book.name;
      
//       const h2 = document.createElement('h2');
//       h2.textContent = name;
//       select_main.appendChild(h2);
//     }
//   });





//random other things tried and original things tried:

// document.addEventListener('DOMContentLoaded', function() {
//   fetchBooks()
//   const select_main = document.querySelector('main');
// })

// function fetchBooks() {
//   return fetch('https://anapioficeandfire.com/api/books')
//   .then(resp => resp.json())
//   .then(result => {
//     const books = result;
//     for (let i=0; i < books.length; i++){
//       const book = books[i];
//       const name = book.name;
//       console.log(name);
//       const h2 = document.createElement('h2');
//       h2.textContent = book_name;
//       select_main.appendChild(h2);
//     }
//   });
// }

// fetchBooks();




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


