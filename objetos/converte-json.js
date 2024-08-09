const student = require('./student.json');

const studentString = JSON.stringify(student);
console.log(studentString);

const studentObj = JSON.parse(studentString);
console.log(studentObj);