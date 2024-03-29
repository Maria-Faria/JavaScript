const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const medias = [10, 8, 7.5, 9];

//             []    ,  []
const lista = [alunos, medias];

console.log(
    `A aluna da posição 1 da lista é ${lista[0][1]}.
    A nota dessa aluna é ${lista[1][1]}`
);

console.log(lista[0]);