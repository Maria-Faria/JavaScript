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

    get name() {
        return this.#name;
    }

    get email() {
        return this.#email;
    }

    get birth() {
        return this.#birth;
    }

    get role() {
        return this.#role;
    }

    get active() {
        return this.#active;
    }

    set name(newName) {
        if(newName === "") {
            throw new Error("Formato do nome não é válido");
        }

        this.#name = newName;
    }

    set email(newEmail) {
        this.email = newEmail;
    }

    /*showInfos() {
        return `Nome: ${this.name}\nEmail: ${this.email}`;
    }*/

    showInfos() {
        if(this.role === "estudante") {
            return `Dados do estudante:\n${this.name}`;
        }

        if(this.role === "admin") {
            return `Dados do admin:\n${this.name}, ${this.role}`;
        }

        if(this.role === "docente") {
            return `Dados do docente:\n${this.name}, ${this.email}`;
        }
    }
}

/*const user = new User("Maria Eduarda", "maria@gmail.com", "15/04/2004");

console.log(user);
console.log(user.showInfos());*/