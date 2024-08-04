const notas = [10, 6.5, 8, 7.5];

let somaNotas = 0;

/*notas.forEach(function (nota) {
    somaNotas += nota
});*/

notas.forEach(soma);

function soma(nota) {
    somaNotas += nota
}

console.log(`A média das notas é ${somaNotas/notas.length}`);