//Receber o texto
const fs = require('fs');

const filePath = process.argv;
const link = filePath[2];

fs.readFile(link, 'utf-8', (error, text) => {
    crashInParagraph(text);
    //checkDuplicatedWords(text);
});



function crashInParagraph(text) {
    const paragraphs = text.toLowerCase().split('\n');
    
    const cont = paragraphs.map((paragraph) => {
        return checkDuplicatedWords(paragraph);
    });

    console.log(cont);
}

function clearWords(word) {
    return word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
}

function checkDuplicatedWords(text) {
    // criar um array com as palavras
    const listWords = text.split(' ');
    const result = {};
    
    listWords.forEach(word => {
        if(word.length >= 3) {
            const cleanWord = clearWords(word);
            // contar as ocorrências
            result[cleanWord] = (result[cleanWord] || 0) + 1 
        }
    });

    // montar um objeto com o resultado
    return result;
}