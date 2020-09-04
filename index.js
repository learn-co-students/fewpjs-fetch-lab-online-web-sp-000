function fetchBooks() {
	return fetch('https://anapioficeandfire.com/api/books')
  .then(resp => resp.json())
  .then(json => renderBooks(json));
}

function totalNumOfPages() {
	return fetch('https://anapioficeandfire.com/api/books')
  .then(resp => resp.json())
  .then(json => totalPages(json));
}

function fetchChars() {
	return fetch('https://anapioficeandfire.com/api/characters')
  .then(resp => resp.json())
  .then(json => secondCharacter(json));
}

function renderBooks(json) {
  const main = document.querySelector('main')
  json.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = `<h2>${book.name}</h2>`
    main.appendChild(h2)
  })
}

function fifthBook(json) {
	const main = document.querySelector('main')
	const h2 = document.createElement('h2')
	h2.innerHTML = `<h2>Fifth book: ${json[4].name}</h2>`
	main.appendChild(h2)
}

function secondCharacter(json) {
	const main = document.querySelector('main')
	const h2 = document.createElement('h2')
	h2.innerHTML = `<h2>Second character: ${json[1].name}</h2>`
	main.appendChild(h2)
}

function totalPages(json) {
	const main = document.querySelector('main')
	const h2 = document.createElement('h2')
	let total = 0
  json.forEach(book => {
    total += book.numberOfPages
  })
	h2.innerHTML = `GoT has ${total} number of pages in total`
	main.appendChild(h2)
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
	fetchChars()
	totalNumOfPages()
})
