function User (name, email) {
    this.name = name;
    this.email = email;

    this.showInfos = function() {
        return `${this.name}, ${this.email}`;
    }
}

const newUser = new User('Maria', 'maria@gmail.com');
console.log(newUser.showInfos());