function line() {
    console.log("-------------------------------------");
}

let question = 1;

/*1 - Crie uma função que receba dois arrays e os concatene em um único array.*/
function concatenar(array1, array2) {
    return array1.concat(array2);
}

const array1 = ['Maria', 'Eduarda'];
const array2 = ['de', 'Faria'];

console.log(question + '.');
console.log(concatenar(array1, array2));
line();
question++;

/*2 - Crie um array chamado numeros contendo números de 1 a 10. 
Utilize o método slice para criar um novo array chamado parteNumeros que contenha apenas os números de índice 
3 a 7 de numeros.*/
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const parteNumeros = numeros.slice(3, 8);
console.log(question + '.');
console.log(parteNumeros);
line();
question++;

/*3 - Dado o array frutas contendo frutas que desejamos comprar na feira:

const frutas = ['Maçã', 'Banana', 'Laranja', 'Limão', 'Abacaxi']

Utilize o método splice para remover as frutas no índice 2 e 3 e, em seguida, adicione as frutas 'Kiwi' e 'Pêssego' 
nesses mesmos índices. */
const frutas = ['Maçã', 'Banana', 'Laranja', 'Limão', 'Abacaxi'];
