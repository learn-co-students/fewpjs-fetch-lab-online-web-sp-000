function fetchBooks() {
  fetch('https://anapioficeandfire.com/api/books')
  .then(resp => resp.json())
  .then(json => console.log(renderBooks(json)));
return fetch('https://anapioficeandfire.com/api/books')
}

function fetch5thBooks() {
  fetch('https://anapioficeandfire.com/api/books')
  .then(resp => resp.json())
  .then(json => fifthBook(json));
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

function fifthBook(json) {
  const main = document.querySelector('main')
  const h3 = document.createElement('h3')
  json[4].characters.forEach(character => {
    let str = "1031";
    let match = character.slice(-4);
    if (str === match) {
      h3.innerHTML = character
    };
  })

  main.appendChild(h3)
}


