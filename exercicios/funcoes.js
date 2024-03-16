function line() {
    console.log('---------------------------------------');
}

/*Crie uma função que receba o nome de uma pessoa como argumento e retorne uma saudação personalizada. 
Em seguida, chame a função e exiba a saudação no console.*/

function greeting(name) {
    return `Hello, ${name}!`;
}

console.log(greeting('Kate'));
line();

/*Crie uma função que receba a idade de uma pessoa e retorne se ela é maior de idade (idade >= 18). 
Imprima o resultado no console.*/

const isAdult = function(age) {
    if(age >= 18) {
        return 'Você é maior de idade';

    }else {
        return 'Você não é maior de idade';
    }
}

console.log(isAdult(12));
line();

/*Crie uma função que receba uma string e verifique se é um palíndromo 
(uma palavra que é lida da mesma forma de trás para frente) utilizando o método de string reverse(). 
Retorne true se for um palíndromo e false caso contrário. Imprima o resultado no console.*/

function isPalindromo(word) {
    const letters = word.split('');
    const reverseWord = letters.reverse().join('');
    
    if(word === reverseWord) {
        return true;
    
    }else {
        return false;
    }
}

console.log(isPalindromo('arara'));
line();

/*Crie uma função que receba três números como parâmetros e determine qual é o maior entre eles. 
Utilize estruturas condicionais (if, else) para comparar os valores e determinar o maior. 
Imprima o maior valor no console. */

const biggestNumber = (num1, num2, num3) => {
    let biggest = num1;

    if(num2 > num1 && num2 > num3) {
        biggest = num2;
    
    }else if(num3 > num1 && num3 > num2) {
        biggest = num3;
    }

    return biggest;
}

console.log(`O maior número é ${biggestNumber(25, 6, 8)}`);
line();

/*Crie uma arrow function chamada calculaPotencia que receba dois parâmetros: a base e o expoente. 
A função deve calcular a potência da base elevada ao expoente e retornar o resultado.*/

const calculaPotencia = (base, expoente) => Math.pow(base, expoente);

console.log(calculaPotencia(2, 3));