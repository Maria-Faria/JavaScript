import User from "./User.js";
import Admin from "./Admin.js";
import Teacher from "./Teacher.js";

const newAdmin = new Admin("Maria", "maria@gmail.com", "2004-04-15");

console.log(newAdmin.name);
