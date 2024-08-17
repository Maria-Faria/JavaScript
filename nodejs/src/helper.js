function filterOccurrence(paragraph) {
    return Object.keys(paragraph).filter(key => paragraph[key] > 1)
}

function createFileOutput(listWords) {
    let finalText = '';

    listWords.forEach((paragraph, index) => {
        const duplicates = filterOccurrence(paragraph).join(', ');
        finalText += `palavras duplicadas no parágrafo ${index + 1}: ${duplicates} \n`
    });

    return finalText;
}

export { createFileOutput };