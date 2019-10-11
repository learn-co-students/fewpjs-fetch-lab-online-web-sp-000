function fetchBooks() {
  fetch('https://anapioficeandfire.com/api/books')
    .then(resp => resp.json())
    .then(json => renderBooks(json));

}

function fetchChar(){
  fetch('https://anapioficeandfire.com/api/characters/1000')
    .then(resp => resp.json())
    .then(json => renderChar(json));
}

function renderChar(json){
  const main = document.querySelector('main');
  const h5 = document.createElement('h5');
  h5.innerHTML = json.name;
  main.appendChild(h5);
}

function renderBooks(json) {
  const main = document.querySelector('main')
  json.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = `<h2>${book.name}</h2>`
    main.appendChild(h2)
  })
  const fifthBook = json[5];
  const h4 = document.createElement('h4');
  h4.innerHTML = fifthBook.name;
  main.appendChild(h4);

  let totalPage = 0;
  json.forEach(book => {
    totalPage += book.numberOfPages;
  })
  const h5 = document.createElement('h5');
  h5.innerHTML = `Total pages = ${totalPage}`;
  main.appendChild(h5);


}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
  fetchChar();

})
