import User from "./User.js";
import Admin from "./Admin.js";
import Teacher from "./Teacher.js";


const newUser = new User("Juliana", "j@jgmail.com", "2010-04-20");
console.log(newUser.showInfos());

console.log("--------------------")

const newAdmin = new Admin("Maria", "maria@gmail.com", "2004-04-15");
console.log(newAdmin.showInfos());

console.log("--------------------")

const newTeacher = new Teacher("Ana", "ana@gmail.com", "2004-04-15");
console.log(newTeacher.showInfos());