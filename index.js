function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    renderBooks(json)
    
    // code below finds the 5th book, 1031st character and page count of that book.
    
    // let fifthBook = json[4]
    // console.log(`The 5th Book is ${fifthBook.name}.`)
    // fetch(fifthBook.characters[1030])
    // .then(function(character) {
    //   return character.json()
    // })
    // .then(function(characterJson){
    //   console.log(`The 1031st character is ${characterJson.name} in ${fifthBook.name}.`);
    //   console.log(`The total page count of this book is ${fifthBook.numberOfPages}`)
    // });
    
  });
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
