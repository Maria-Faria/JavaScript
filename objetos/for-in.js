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

for (let key in student) {
    const type = typeof student[key];
    
    if(type !== 'object' && type !== 'function') {
        const text = `A chave ${key} tem o valor ${student[key]}`;
        console.log(text);
    }
}
