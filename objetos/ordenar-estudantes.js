const students = require('./students.json');

function order(list, property) {
    return list.sort((a, b) => {
        if(a[property] < b[property]) return -1;

        if(a[property] > b[property]) return 1;

        return 0;
    });
}

const orderedList = order(students, 'nome');
console.log(orderedList);