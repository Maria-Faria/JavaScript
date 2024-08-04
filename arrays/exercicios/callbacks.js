/*1 - Utilize o método forEach para imprimir cada elemento de um array juntamente com seu índice.*/

const array = [10, 2, 3, 4, 5];

array.forEach(element => console.log(`${element} - índice ${array.indexOf(element)}`));
console.log("----------------------------------")

/*2 - Crie uma função chamada executaOperacaoEmArray que recebe dois parâmetros: um array e uma função de callback que executa alguma operação matemática. Essa função deve iterar por cada elemento do array e aplicar a função de callback em cada um dos elementos, imprimindo o resultado da operação no console. */

function executaOperacaoEmArray(array, operation) {
    array.forEach(element => console.log(`O resultado da operação é: ${operation(element)}`));
}

function soma1(value) {
    return value + 1;
}

executaOperacaoEmArray([1, 2, 3], soma1);
console.log("----------------------------------")

/*3 - Você recebeu um array numeros contendo valores numéricos. Crie um programa que verifique se um número específico está presente nesse array. Se estiver, o programa deve retornar a posição (índice) desse número. Caso contrário, se o número não estiver presente, o programa deve retornar "-1". */

const arrayNumbers = [1, 5, 6, 8];
const number = 0;
let found;

for(let i = 0; i < arrayNumbers.length; i++) {
    found = number === arrayNumbers[i] ? `Número encontrado na posição ${i}` : -1;

    if(found != -1) {
        break;
    }
}

console.log(found);
console.log("----------------------------------")

const nomesTurmaA = [
    'João Silva',
    'Maria Santos',
    'Pedro Almeida'
  ];
  
  const nomesTurmaB = [
    'Carlos Oliveira',
    'Ana Souza',
    'Lucas Fernandes'
  ];

  const todosOsAlunos = nomesTurmaA.concat(nomesTurmaB);

  const foundStudent = todosOsAlunos.find((student) => student === "Carlos Oliveira");
  foundStudent != undefined ? console.log(foundStudent) : console.log("Aluno não encontrado");