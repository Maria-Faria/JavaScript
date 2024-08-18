import User from "./User.js";

class Admin extends User {
    constructor(name, email, birth, role = "admin", active = true) {
        super(name, email, birth, role, active); //reaproveita da superclasse
    }
}

const admin = new Admin("Zé", "ze@gmail.com", "10/02/2008");

console.log(admin);
console.log(admin.showInfos());