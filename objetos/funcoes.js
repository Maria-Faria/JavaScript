const student = {
    name: 'José Silva',
    age: 32,
    cpf: '45671258932',
    class: 'JavaScript',
    colleger: true,
    phones: ['12996702149', '12885647123'],
    address: [{
        street: 'Joaquim Antonio da Rocha',
        number: '222',
        complement: 'Logo ali'
    }],
    average: 7.5,
    approved: function(baseAverage) {
        return this.average >= baseAverage ? true : false
    }
};

console.log(student.approved(7));

