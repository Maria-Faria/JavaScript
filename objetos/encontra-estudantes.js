const students = require('./students.json');

function searchInformation(list, key, value) {
    return list.find((student) => student[key].includes(value));
}

const studentFound = searchInformation(students, 'nome', 'Juliet');
console.log(studentFound);

const studentPhone = searchInformation(students, 'telefone', '9916828153');
console.log(studentPhone);