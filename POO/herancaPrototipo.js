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
};

const admin= {
    name: "Zé",
    email: "ze@gmail.com",
    birth: "18/07/2004",
    role: "admin",
    active: true,
    createCourse: function() {
        console.log("Curso criado");
   }
}

Object.setPrototypeOf(admin, user);
admin.createCourse();
admin.showInfos();