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
    },
    {
        street: 'Rua Dona Clotilde',
        number: '71',
        complement: null
    }]
};

function showPhones(phone1, phone2) {
    console.log(`Ligar para ${phone1}`);
    console.log(`Ligar para ${phone2}`);
}

showPhones(student.phones[0], student.phones[1]);
showPhones(...student.phones);

const sendDatas =  {
    receiver: student.name,
    ...student.address[0]
};

console.log(sendDatas);