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
    }]
};

student.address.push({
    street: 'Rua Cinco',
    number: 5,
    complement: ''
});

const listAddressWithComplement = student.address.filter((address) => address.complement);

console.log(listAddressWithComplement)