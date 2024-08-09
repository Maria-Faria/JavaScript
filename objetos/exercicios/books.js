const library = [
    { id: 1, title: "O Senhor dos Anéis", writer: "J.R.R. Tolkien", publicationYear: 1954 },
    { id: 2, title: "Dom Quixote", writer: "Miguel de Cervantes", publicationYear: 1605 },
    { id: 3, title: "1984", writer: "George Orwell", publicationYear: 1949 }
]

function findBookById(list, id) {
    const book = list.find((book) => book.id === id);

    if (book) return book;
    return null;
}

const book = findBookById(library, 3);
console.log(book);