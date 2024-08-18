import User from "./User.js";

export default class Admin extends User {
    constructor(name, email, birth, role = "admin", active = true) {
        super(name, email, birth, role, active); //reaproveita da superclasse
    }

    createCourse(courseName, vacanciesNumber) {
        return `O curso de ${courseName} foi criado com ${vacanciesNumber} vagas`;
    }
}

/*const admin = new Admin("Zé", "ze@gmail.com", "10/02/2008");

console.log(admin);
-console.log(admin.createCourse("JavaScript", 8));*/