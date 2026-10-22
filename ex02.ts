export {};

// Exercício 02: Cupom fiscal

const nomeDigitado: string = ' maria da silva ';

function formatarNome(nome: string): string {
  const minusculas: string[] = ['da', 'de', 'do'];
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

const precoLido: string = '12.40';
const quantidadeLida: string = '3un';

const preco: number = Number(precoLido);
const quantidade: number = parseInt(quantidadeLida, 10);

const clienteFidelidade: boolean = true;
const numeroCupom: number = 42;

const subtotal: number = preco * quantidade;
const desconto: number = clienteFidelidade ? subtotal * 0.05 : 0;
const total: number = subtotal - desconto;

const cupom: string = `CUPOM Nº ${numeroCupom.toString().padStart(6, '0')}
Cliente: ${formatarNome(nomeDigitado)}
Item: ${quantidade} x R$ ${preco.toFixed(2)}
Subtotal: R$ ${subtotal.toFixed(2)}
Desconto fidelidade: R$ ${desconto.toFixed(2)}
TOTAL: R$ ${total.toFixed(2)}`;

console.log(cupom);
