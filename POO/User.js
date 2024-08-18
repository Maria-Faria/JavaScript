export default class User {
    #name;
    #email;
    #birth;
    #role;
    #active;
    constructor(name, email, birth, role, active = true) {
        this.#name = name;
        this.#email = email;
        this.#birth = birth;
        this.#role = role || "estudante";
        this.#active = active;
    }

    showInfos() {
        return `Nome: ${this.#name}\nEmail: ${this.#email}`;
    }
}

/*const user = new User("Maria Eduarda", "maria@gmail.com", "15/04/2004");

console.log(user);
console.log(user.showInfos());*/