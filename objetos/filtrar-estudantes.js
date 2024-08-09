const students = require('./students.json');

function filterByProperty(list, property) {
    return list.filter((student) => {
        return !student.endereco.hasOwnProperty(property)
    })
}

const listIncompleteAddress = filterByProperty(students, 'cep');
console.log(listIncompleteAddress);