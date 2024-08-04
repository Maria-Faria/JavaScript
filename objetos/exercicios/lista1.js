/*1 - Crie um arquivo chamado livro.js. Nesse arquivo, crie um objeto livro que represente as informações de um livro. O objeto deve conter as seguintes propriedades:

titulo (string): título do livro.
autor (string): nome do autor do livro.
anoPublicacao (number): ano de publicação do livro.
genero (string): gênero do livro.
No final do arquivo livro.js, instancie o objeto livro com dados de algum livro que você goste e imprima os detalhes do livro no console. */

const book = {
    title: '',
    writer: '',
    publicationYear: '',
    genre: ''
};

book.title = 'Memórias do Subsolo';
book.writer = 'Fiódor Dostoievsk';
book.publicationYear = 1864;
book.genre = 'Novela';

console.log(book);
console.log('------------------------------');

/*2 - Crie uma nova variável chamada anoAtual e atribua a ela o ano atual (utilize new Date().getFullYear()). Crie um objeto chamado livro com as seguintes propriedades: título, autor, ano de publicação e gênero.

Adicione a propriedade idadePublicacao diretamente ao objeto livro, representando há quantos anos o livro foi publicado. Calcule essa idade subtraindo o anoDePublicacao do anoAtual.

Crie uma string chamada mostrarDetalhes contendo os detalhes do livro, incluindo a informação da idade de publicação.

Exiba a string mostrarDetalhes no console para verificar se as informações, incluindo a idade de publicação, são exibidas corretamente. */

const yearNow = new Date().getFullYear();

book.publicationAge = yearNow - book.publicationYear;

const showDetails = `Nome do livro: ${book.title}
Autor: ${book.writer}
Idade de publicação: ${book.publicationAge} anos`

console.log(showDetails);
console.log('------------------------------');

book.rating = null;
const rating = 5;

if(book.rating === null) book.rating = rating; else console.log('Livro já avaliado');
console.log(book);
console.log('------------------------------');

delete book.rating;
console.log(book);