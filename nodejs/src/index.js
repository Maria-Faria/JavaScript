//Receber o texto
const fs = require('fs');

const filePath = process.argv;
const link = filePath[2];

fs.readFile(link, 'utf-8', (error, text) => {
    checkDuplicatedWords(text);
});

// contar as ocorrências
// montar um objeto com o resultado

function checkDuplicatedWords(text) {
    // criar um array com as palavras
    const listWords = text.split(' ');
    const result = {};
    
    listWords.forEach(word => {
        result[word] = (result[word] || 0) + 1 
    });

    console.log(result);
}