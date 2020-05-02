function fetchBooks() {
	  fetch("https://anapioficeandfire.com/api/books")
    .then(resp => resp.json())
    .then(json => renderBooks(json))

}

function renderBooks(json) {
