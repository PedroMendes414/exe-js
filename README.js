const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionaria",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da babilonia",
                author: "George S.Clanson",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T.Kiyosaki e Sharon L.Lechter",
            },

        ],
    },
    {
        category: "Inteligencia Emocional",
        books: [
            {
                title: "Voce é insubstituivel",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade - Como enfrenter o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 habitos das pessoas altamente eficazes",
                author: "Stephen R.Covery",
            },

        ],
    },
];

const totalCategories = booksByCategory.length

console.log(totalCategories);
for (let category of booksByCategory) {
    console.log('Total de livros da categoria da categoria: ', category.category)
    console.log(category.books.length)
}
function countAuthors() {
    let authors = [];

    for (let category of booksByCategory) {
        for (let book of category.books) {
            if (authors.indexOf(book.author) == -1) {
                authors.push(book.author)
            }
        }
    }
    console.log("Total de autores: ", authors.length)
}

countAuthors();

function booksOfAuthor(author) {
    let books = [];

    for (let category of booksByCategory) {
        for (let book of category.books) {
            if (book.author === author) {
                books.push(book.title)
            }
        }
    }
    console.log(`Livros do autor ${author}:  ${books.join(", ")}`)
}
booksOfAuthor('Stephen R.Covery');
