// Exercício 02: Cupom fiscal
const nomeDigitado = ' maria da silva ';
function formatarNome(nome) {
    const minusculas = ['da', 'de', 'do'];
    return nome
        .trim()
        .split(' ')
        .filter((palavra) => palavra !== '')
        .map((palavra, i) => {
        const p = palavra.toLowerCase();
        if (i > 0 && minusculas.indexOf(p) !== -1) {
            return p;
        }
        return p.charAt(0).toUpperCase() + p.slice(1);
    })
        .join(' ');
}
const precoLido = '12.40';
const quantidadeLida = '3un';
const preco = Number(precoLido);
const quantidade = parseInt(quantidadeLida, 10);
const clienteFidelidade = true;
const numeroCupom = 42;
const subtotal = preco * quantidade;
const desconto = clienteFidelidade ? subtotal * 0.05 : 0;
const total = subtotal - desconto;
const cupom = `CUPOM Nº ${numeroCupom.toString().padStart(6, '0')}
Cliente: ${formatarNome(nomeDigitado)}
Item: ${quantidade} x R$ ${preco.toFixed(2)}
Subtotal: R$ ${subtotal.toFixed(2)}
Desconto fidelidade: R$ ${desconto.toFixed(2)}
TOTAL: R$ ${total.toFixed(2)}`;
console.log(cupom);
export {};
