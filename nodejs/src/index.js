//Receber o texto
const fs = require('fs');

const filePath = process.argv;
const link = filePath[2];

fs.readFile(link, 'utf-8', (error, text) => {
    crashInParagraph(text);
    //checkDuplicatedWords(text);
});


// montar um objeto com o resultado

function crashInParagraph(text) {
    const paragraphs = text.toLowerCase().split('\n');
    
    const cont = paragraphs.map((paragraph) => {
        return checkDuplicatedWords(paragraph);
    });

    console.log(cont);
}

function checkDuplicatedWords(text) {
    // criar um array com as palavras
    const listWords = text.split(' ');
    const result = {};
    
    listWords.forEach(word => {
        // contar as ocorrência
        result[word] = (result[word] || 0) + 1 
    });

    return result;
}