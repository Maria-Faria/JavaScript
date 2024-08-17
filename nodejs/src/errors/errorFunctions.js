export default function treatErrors(error) {
    if(error.code === 'ENOENT') throw new Error("Arquivo não encontrado");
    else return "Erro na aplicação";
    
}