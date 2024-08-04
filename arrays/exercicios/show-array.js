//Escreva um código que utilize o loop for/of para iterar e imprimir cada elemento de um array.
const array = [1, 2, 3, 8, 4, 9]

for(element of array) {
    console.log(element)
}

console.log("--------------------------------")

//Crie uma função que receba uma array e imprima no console o número do índice e o elemento.
function showElementsArray(array) {
    for(let i = 0; i < array.length; i++) {
        console.log(`${i}: ${array[i]}`)
    }
}

console.log("--------------------------------")

//Crie uma função que receba uma array de números inteiros e retorne a soma dos elementos.
function sumElements(array) {
    let sum = 0;

    for(element of array) {
        sum += element
    }

    return sum
}

console.log("--------------------------------")

//Crie uma função que receba uma array de números inteiros e retorne o menor valor e o maior valor da array, no seguinte formato: 'o menor número é X e o maior número é Y'.
function maxAndMin(array) {
    let min = array[0]
    let max = array[0]

    for(element of array) {
        if (element < min) {
            min = element
        }

        if(element > max) {
            max = element
        }
    }

    return `O menor número é ${min} e o maior é ${max}`
}

showElementsArray(array)
console.log(sumElements(array))
console.log("--------------------------------")
console.log(maxAndMin(array))