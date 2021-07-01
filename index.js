let totalPages = 0;

function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
  .then(resp => resp.json())
  .then(json => renderBooks(json));
};
 
// renders book titles into the DOM by passing a JSON object to renderBooks():
function renderBooks(json) {
  const main = document.querySelector('main');
  json.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = `<h2>${book.name}</h2>`;
    main.appendChild(h2);

    // // The total number of pages of all the books
    // pages = book.numberOfPages;
    // totalPages = totalPages + pages;
    // console.log(`current page sum = ${totalPages}`);
  });
  
  // The 5th book in the series
  // let fifthBookEle = document.createElement('h3');
  // fifthBookEle.innerText = json[4].name;
  // main.appendChild(fifthBookEle);
  
  // return total pages
  // const totalPagesEle = document.createElement('h3')
  // totalPagesEle.innerText = `Total pages: ${totalPages}`
  // main.appendChild(totalPagesEle) 
  // console.log(totalPages)
}
 
document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})