import fs from 'fs';
import treatErrors from './errors/errorFunctions.js';
import { countWords } from './index.js';

const filePath = process.argv;
const link = filePath[2];
const address = filePath[3];

fs.readFile(link, 'utf-8', (error, text) => {

    try {
        if (error) throw error; //interrompe o fluxo
        const result = countWords(text);
        createAndSaveFile(result, address);

    } catch (error) {
        treatErrors(error);
    }
});

async function createAndSaveFile(listWords, address) {
    const newFile = `${address}/result.txt`;
    const wordsText = JSON.stringify(listWords);

    try {
        await fs.promises.writeFile(newFile, wordsText); //não retorna nada
        console.log("Arquivo criado");

    } catch (error) {
        throw error;
    }
}