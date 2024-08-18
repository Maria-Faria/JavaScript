import User from "./User.js";
import Admin from "./Admin.js";
import Teacher from "./Teacher.js";

const newUser = new User("Maria", "maria@gmail.com", "2004-04-15");

console.log(newUser.showInfos());
