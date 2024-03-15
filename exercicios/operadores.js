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
