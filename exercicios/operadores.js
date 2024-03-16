/*Crie variáveis que armazenem o valor do saldo, de depósito e de um saque de uma conta bancária, depois realize 
operações de adição e subtração entre eles utilizando uma variável chamada operacao, considerando a função de cada variável 
criada anteriormente. Exiba os resultados finais no console*/

let saldo = 1412;
const deposito = 50;
const saque = 150;

let operacao = saldo + deposito;
saldo = operacao;

console.log(`Saldo após depósito: ${saldo}`);

operacao = saldo - saque;
saldo = operacao;
console.log(`Saldo após saque: R$${saldo.toFixed(2)}`);

console.log('-----------------------------------------');

/*Crie uma variável numérica com um valor. Utilize um operador ternário para verificar se esse valor é par ou ímpar. 
Exiba o resultado no console.*/

const num = 7;
const parImpar = num % 2 === 0 ? 'Par' : 'Ímpar';

console.log(`${num} é ${parImpar}`);

console.log('-----------------------------------------');

/*Considere uma situação em que você está verificando se um usuário está logado e tem permissão de administrador para 
acessar determinada funcionalidade. Utilize variáveis booleanas para simular essas condições e use o operador AND para 
verificar se ambas são verdadeiras.*/

let logado = false;
const isAdmin = true;

if(logado && isAdmin) {
    console.log('Acesso liberado');

}else {
    console.log('Acesso negado');
}

console.log('-----------------------------------------');

/*Declare duas variáveis booleanas e use o operador OR para verificar se pelo menos uma delas é verdadeira. 
Exiba o resultado no console.*/

const var1 = false;
const var2 = true;

if(var1 || var2) {
    console.log('Pelo menos uma das variáveis é verdadeira');

}else {
    console.log('Nenhuma das variáveis é verdadeira');
}