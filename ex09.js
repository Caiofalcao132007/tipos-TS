// Exercício 09: Lendo a resposta de uma API de clima
const respostaOk = '{"cidade":"Porto Velho","temperatura":34,"umidade":0.62}';
const respostaQuebrada = '{"cidade":"Porto Velho","temperatura":"quente"}';
const respostaInvalida = '{ cidade: Porto Velho ';
// Versão com any (para ver o problema)
function lerComAny(json) {
    const dados = JSON.parse(json);
    console.log(dados.temperatura.toFixed(1));
}
// lerComAny(respostaQuebrada); // Erro só na execução: TypeError: dados.temperatura.toFixed is not a function
// O compilador não reclama porque com any nada é verificado.
// Função que nunca retorna
function falhar(mensagem) {
    throw new Error(mensagem);
}
// Versão segura com unknown
function lerClima(json) {
    let dados;
    try {
        dados = JSON.parse(json);
    }
    catch (erro) {
        return falhar('JSON malformado');
    }
    if (typeof dados !== 'object' || dados === null) {
        return falhar('resposta inválida');
    }
    if (!('cidade' in dados) || typeof dados.cidade !== 'string') {
        return falhar('campo "cidade" inválido');
    }
    if (!('temperatura' in dados) || typeof dados.temperatura !== 'number') {
        return falhar('campo "temperatura" inválido');
    }
    return { cidade: dados.cidade, temperatura: dados.temperatura };
}
const respostas = [respostaOk, respostaQuebrada, respostaInvalida];
for (const resposta of respostas) {
    try {
        const clima = lerClima(resposta);
        console.log(`${clima.cidade}: ${clima.temperatura.toFixed(1)}°C`);
    }
    catch (erro) {
        if (erro instanceof Error) {
            console.log(`Erro: ${erro.message}`);
        }
    }
}
export {};
