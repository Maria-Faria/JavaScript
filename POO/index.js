import User from "./User.js";
import Admin from "./Admin.js";
import Teacher from "./Teacher.js";

/*const newAdmin = new Admin("Maria", "maria@gmail.com", "2004-04-15");

console.log(newAdmin.name);
*/

const newUser = new User("Juliana", "j@jgmail.com", "2010-04-20");

console.log(newUser.showInfos());

newUser.name = "";
console.log(newUser.name);