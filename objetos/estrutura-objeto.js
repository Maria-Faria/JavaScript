const student = {
    name: 'José Silva',
    age: 32,
    cpf: '45671258932',
    class: 'JavaScript'
};

console.log(student.name);
console.log(`O nome do estudante é ${student.name}`);
console.log(`Os três primeiros números do CPF são ${student.cpf.substring(0, 3)}`);