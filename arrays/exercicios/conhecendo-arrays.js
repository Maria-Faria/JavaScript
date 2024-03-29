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

console.log(question + '.');
console.log(`Lista de compras inicial: ${frutas}`);

frutas.splice(2, 2, 'Kiwi', 'Pêssego');

console.log(`Nova lista de compras: ${frutas}`);
line();
question++;

/*4 - Crie dois arrays chamados menuPrincipal e menuDeSobremesas contendo opções do cardápio de um restaurante. 
Utilize o método concat para criar um novo array menuCompleto contendo todos os elementos de menuPrincipal seguidos 
pelos elementos de menuDeSobremesas.*/
const menuPrincipal = ['Frango grelhado', 'Omelete', 'Peixe com legumes'];
const menuDeSobremesas = ['Brigadeiro de colher', 'Pudim', 'Merengue'];

const menuCompleto = menuPrincipal.concat(menuDeSobremesas);

console.log(question + '.');
console.log(menuCompleto);
line();
question++;

/*5 - Crie uma lista bidimensional com 3 linhas e 3 colunas, onde cada elemento seja uma matriz 3x3 com valores 
iniciando em 1 e aumentando em 1 a cada elemento.

Dicas:

comece com um array vazio, por exemplo const matriz = [] e adicione valores nele com push;
você pode resolver usando um for dentro de outro for. */
const matriz = [];
let value = 1;

for(let i = 0; i < 3; i++) {
    const row = [];
    for(let j = 0; j < 3; j++) {
        row.push(value);
        value++;   
    }

    matriz.push(row);
}

console.log(question + '.');
console.log(matriz);
line();
question++;