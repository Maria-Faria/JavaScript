/*Declare três variáveis diferentes (uma para cada tipo: string, número e booleano) e atribua valores a elas. 
Em seguida, exiba o tipo de cada variável no console.*/
const text = 'String aqui';
const number = 5;
const boolean = true;

console.log(text + " = " + typeof(text));
console.log(number + " = " + typeof(number));
console.log(boolean + " = " + typeof(boolean));

console.log('----------------------------------------');

/*Crie duas variáveis, uma contendo seu primeiro nome e outra contendo seu último nome. Em seguida, combine-as em 
uma terceira variável usando o operador + e em uma quarta variável usando template strings. Por fim, imprima os resultados 
obtidos no console.*/
const firstName = 'Maria Eduarda';
const lastName = 'de Faria';

const fullName = firstName + ' ' + lastName;
const fullNameWithStrings = `${firstName} ${lastName}`;

console.log(fullName);
console.log(fullNameWithStrings);

console.log('----------------------------------------');

/*Declare duas variáveis, uma contendo um número e outra contendo uma string. Em seguida, combine-as em uma 
terceira variável usando template strings para montar uma frase e exiba o resultado no console.*/
const num = 5;
const string = 'texto';

const phrase = `A palavra ${string} tem ${num} letras`;

console.log(phrase);

console.log('----------------------------------------');

/*Crie uma variável inicializada com um valor de qualquer tipo e, em seguida, reatribua um novo valor a essa variável. 
Imprima ambos os valores no console após atribuí-los.*/
let value = 'palavra';
console.log(value);

value = 90;
console.log(value);

console.log('----------------------------------------');

/*Declare uma variável usando var fora de um bloco de código (por exemplo, if) e outra dentro desse bloco. 
Tente acessar essas variáveis dentro do bloc e fora dele utilizando console.log e analise os resultados. 
Faça o mesmo processo utilizando let e compare com os resultados anteriores.*/
var test = 'teste';
console.log('Fora do bloco: ' + test);

if(true) {
    var test2 = 'teste 2';
    console.log('Dentro do bloco: ' + test);
    console.log('Dentro do bloco: ' + test2);
}

console.log('Fora do bloco: ' + test);
console.log('Fora do bloco: ' + test2);