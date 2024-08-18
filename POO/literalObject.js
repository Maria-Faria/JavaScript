const user = {
    name: "Maria",
    email: "maria@gmail.com",
    birth: "15/04/2004",
    role: "Estudante",
    active: true,
    showInfos: function() {
        console.log(this.name);
        console.log(this.email);
    }
}

//user.showInfos();

//const show = user.showInfos;
//show();

const show = function() {
    console.log(this.name, this.email);
}

const showName = show.bind(user);
showName();