import User from "./User.js";

class Teacher extends User {
    constructor(name, email, birth, role = "docente", active = true) {
        super(name, email, birth, role, active);
    }

    approveStudent(student, course) {
        return `Estudante ${student} passou no curso de ${course}\nResponsável pelo curso: ${this.name}`;
    }
}

const teacher = new Teacher("Roberto", "roberto@gmail.com", "20/07/1985");

console.log(teacher);
console.log(teacher.approveStudent("Maria", "JS"));