//Receber o texto
const fs = require('fs');

const filePath = process.argv;
const link = filePath[2];

fs.readFile(link, 'utf-8', (error, text) => {
    console.log(text);
});

console.log(link);