import fs from 'fs';
import treatErrors from './errors/errorFunctions.js';
import { countWords } from './index.js';

const filePath = process.argv;
const link = filePath[2];

fs.readFile(link, 'utf-8', (error, text) => {

    try {
        if (error) throw error; //interrompe o fluxo
        countWords(text);

    } catch (error) {
        treatErrors(error);
    }
});