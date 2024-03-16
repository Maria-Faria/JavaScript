const studentFailed = (finalGrade, absence) => {
    if(finalGrade < 7 && absence > 4) {
        return true;
    
    }else {
        return false;
    }
}

console.log(studentFailed(6, 5));
console.log(studentFailed(10, 2));

const showName = (name) => name; //utilizado em funções dentro de funções
console.log(showName('Maria'));