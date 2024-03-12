/*Crie uma variável contendo uma frase. Em seguida, exiba no console o comprimento da frase e a mesma frase em constras maiúsculas.*/ 

//criando a variável com a frase
const phrase = 'Just give me a reason';

//exibindo o comprimento da frase
console.log('Comprimento da frase (com espaços): ' + phrase.length);

//frase em capslock
console.log(phrase.toUpperCase());
console.log("-----------------------------------");

/*Declare duas variáveis, uma inicializada com valor null e outra que não recebe atribuição (resultando em undefined). 
Exiba os valores no console.*/

//variável null
let nullVar = null;
let undefinedVar;

//exibindo no console
console.log(nullVar);
console.log(undefinedVar);
console.log("-----------------------------------");

/*Crie 3 variáveis de tipos diferentes, utilize template strings para combinar os diferentes tipos de dados (number, string, boolean)
em uma única string e exiba o resultado no console.*/
const var1 = 15;
const var2 = 'Variável string';
const var3 = true;

const result = `${var1} é um número, '${var2}' é uma string e ${var3} é um boolean`;

console.log(result);
console.log("-----------------------------------");

/*Crie uma variável numérica e uma string. Faça a conversão da variável numérica para string e da string para número. 
Exiba os tipos de dados resultantes no console.*/
const num = 6;
const numString = '5';

console.log(String(num));
console.log(Number(numString));
console.log("-----------------------------------");

/*Crie uma variável com uma string e utilize métodos de manipulação de strings, como toUpperCase, toLowerCase, slice ou outros, 
para modificar a string original. Exiba os resultados finais no console.*/
const text = 'I am Still Remembering';

console.log(`Texto original: ${text}`);
console.log(`Em capslock: ${text.toUpperCase()}`);
console.log(`Em minúsculas: ${text.toLowerCase()}`);
console.log(`Apenas uma parte: ${text.slice(0, 4)}`);