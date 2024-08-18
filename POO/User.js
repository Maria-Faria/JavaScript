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
        return this.email;
    }

    get birth() {
        return this.birth;
    }

    get role() {
        return this.#role;
    }

    get active() {
        return this.#active;
    }
    
    #createUserObj() {
        return ({
            name: this.#name,
            email: this.#email,
            birth: this.#birth,
            role: this.#role,
            active: this.#active,
        });
    }

    showInfos() {
        const userObj = this.#createUserObj();
        return `Nome: ${userObj.name}\nEmail: ${userObj.email}`;
    }
}

/*const user = new User("Maria Eduarda", "maria@gmail.com", "15/04/2004");

console.log(user);
console.log(user.showInfos());*/