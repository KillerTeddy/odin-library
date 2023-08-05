let myLibrary = [];

function Book (title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}
  
 Book.prototype.info = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? 'read' : 'not read yet'}`;
}
  
const hobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false);
const lotr = new Book('The Lord of the Rings', 'J.R.R. Tolkien', 1137, false);
const theWayOfKings = new Book('The Way of Kings', 'Brandon Sanderson', 1007, true);
const mistborn = new Book('Mistborn', 'Brandon Sanderson', 541, true);
const oathbringer = new Book('Oathbringer', 'Brandon Sanderson', 1243, false);
const warbreaker = new Book('Warbreaker', 'Brandon Sanderson', 652, true);
const elantris = new Book('Elantris', 'Brandon Sanderson', 638, true);
const twilight = new Book('Twilight', 'Stephenie Meyer', 498, false);

//create a card displaying the book and insert it under the books div


function createCard(book) {
    const books = document.querySelector('.books');
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
        <h2>${book.title}</h2>
        <h3>${book.author}</h3>
        <p>${book.pages} pages</p>
        <p>${book.read ? 'read' : 'not read yet'}</p>
        <button class="remove-button">Remove</button>
    `;
    addRemoveButtonListeners();
    books.appendChild(card);
}

function addRemoveButtonListeners() {
    const removeButtons = document.querySelectorAll('.remove-button');
    removeButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const card = button.parentElement;
        card.remove();
      });
    });
  }  


//use the add-book-button button to create a form
const addBookButton = document.querySelector('.add-book-button');
addBookButton.addEventListener('click', () => {
    const form = document.createElement('form');
    form.classList.add('form');
    form.innerHTML = `
        <label for="title">Title</label>
        <input type="text" id="title" name="title" required>
        <label for="author">Author</label>
        <input type="text" id="author" name="author" required>
        <label for="pages">Pages</label>
        <input type="number" id="pages" name="pages" required>
        <label for="read">Read</label>
        <input type="checkbox" id="read" name="read">
        <button type="submit">Add Book</button>
    `;
    const books = document.querySelector('.books');
    books.appendChild(form);
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const title = document.querySelector('#title').value;
        const author = document.querySelector('#author').value;
        const pages = document.querySelector('#pages').value;
        const read = document.querySelector('#read').checked;
        const newBook = new Book(title, author, pages, read);
        myLibrary.push(newBook);
        createCard(newBook);
        form.remove();
    });
});

myLibrary.push(hobbit);
myLibrary.push(lotr);
myLibrary.push(theWayOfKings);
myLibrary.push(mistborn);
myLibrary.push(oathbringer);
myLibrary.push(warbreaker);
myLibrary.push(elantris);
myLibrary.push(twilight);

for (let i = 0; i < myLibrary.length; i++) {
    createCard(myLibrary[i]);
}
  
console.log(myLibrary);
  