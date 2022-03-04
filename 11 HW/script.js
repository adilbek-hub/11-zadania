function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

function UI() {}

UI.prototype.addBookToList = function(book) {
    const list = document.querySelector('.book-list');
    const row = document.createElement('tr');
 row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.title}</td>
        <td><a href='#' class='delete'>x</a></td>
    `;

    list.appendChild(row);
}

UI.prototype.clearFields = function() {
    const   title = document.getElementById('title').value = '',
            author = document.getElementById('author').value = '',
            isbn = document.getElementById('author').value = '';
}

document.getElementById('book__form').addEventListener('submit', (e) => {
    const   title = document.getElementById('title').value,
            author = document.getElementById('author').value,
            isbn = document.getElementById('isbn').value;

    const book = new Book(title,author, isbn);
    const ui = new UI();

    ui.addBookToList(book);
    ui.clearFields();

    e.preventDefault();
})