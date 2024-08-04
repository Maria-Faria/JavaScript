const student = {
    name: 'José Silva',
    age: 32,
    cpf: '45671258932',
    class: 'JavaScript'
};

console.log(student.name);

function showStudentInfo(studentObj, studentInfo) {
    return studentObj[studentInfo];
}

console.log(showStudentInfo(student, 'age'));
console.log(showStudentInfo(student, 'cpf'));