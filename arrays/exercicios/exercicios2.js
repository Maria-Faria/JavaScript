/*1 - Faça uma função que aceite vários arrays como argumentos e retorne um único array contendo todos os elementos dos arrays fornecidos, utilizando Spread Operator.

Dica: é possível usar o spread operator diretamente em um parâmetro de função para "espalhar" seu conteúdo, por exemplo function funcaoExemplo(...params).*/

function allElements(...arrays) {
    const newArray = [].concat(...arrays);

    return newArray;
}

console.log(allElements([1, 2, 3, 4], [9, 0, 8, 7], [6, 90]))