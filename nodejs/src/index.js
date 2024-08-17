export function countWords(text) {
    const paragraphs = extractParagraphs(text)
    const cont = paragraphs.flatMap(paragraph => {
        if(!paragraph) return [];
    
        return checkDuplicatedWords(paragraph);
    });    
    
    return cont;
}

function extractParagraphs(text) {
    return text.toLowerCase().split('\n');
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