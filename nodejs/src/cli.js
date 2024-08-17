import fs from 'fs';
import path from 'path';
import treatErrors from './errors/errorFunctions.js';
import { countWords } from './index.js';
import { createFileOutput } from './helper.js';
import { Command } from 'commander';

const program = new Command();

program
.version('0.0.1')
.option('-t, --texto <string>', 'caminho do texto a ser processado')
.option('-d, --destino <string>', 'caminho da pasta onde salvar o arquivo de resultados')
.action((options) => {
    const { texto, destino } = options;

    if (!texto || !destino) {
        console.error("Erro: favor inserir caminho de origem e destino");

        program.help();

        return;
    }

    const textPath = path.resolve(texto);
    const destinyPath = path.resolve(destino);

    try {
        processFile(textPath, destinyPath);
        console.log("Texto processado com sucesso")

    } catch (error) {
        console.log(`Ocorreu um erro no processamento - ${error}`);
    }
})

program.parse();

function processFile(texto, destino) {

    fs.readFile(texto, 'utf-8', (error, text) => {
    
        try {
            if (error) throw error; //interrompe o fluxo
            const result = countWords(text);
            createAndSaveFile(result, destino);
    
        } catch (error) {
            treatErrors(error);
        }
    });
}

/*async function createAndSaveFile(listWords, address) {
    const newFile = `${address}/result.txt`;
    const wordsText = JSON.stringify(listWords);

    try {
        await fs.promises.writeFile(newFile, wordsText); //não retorna nada
        console.log("Arquivo criado");

    } catch (error) {
        throw error;
    }
}*/

function createAndSaveFile(listWords, address) {
    const newFile = `${address}/result.txt`;
    const wordsText = createFileOutput(listWords);

    fs.promises.writeFile(newFile, wordsText) //não retorna nada
    .then(() => {
        //processamento feito com o resultado da promessa

        console.log("Arquivo criado");
    })
    .catch((error) => {
        throw error;
    })
    .finally(() => console.log("Operação finalizada")); //sempre acontece, com ou sem falhas

}