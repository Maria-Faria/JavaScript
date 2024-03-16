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

/* */