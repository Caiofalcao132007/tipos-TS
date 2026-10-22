export {};

// Exercício 05: Boletim do clima

const leituras: [cidade: string, temperatura: number][] = [
  ['Porto Velho', 34],
  ['Curitiba', 12],
  ['Manaus', 31],
  ['Porto Alegre', 9],
  ['Natal', 29],
];

function extremos(temps: number[]): [number, number] {
  return [Math.min(...temps), Math.max(...temps)];
}

const temperaturas: number[] = leituras.map(([, temp]) => temp);
const [minima, maxima] = extremos(temperaturas);
const media: number = temperaturas.reduce((soma, t) => soma + t, 0) / temperaturas.length;

for (const [cidade, temp] of leituras) {
  console.log(`${cidade}: ${temp}°C`);
}
console.log(`Mínima: ${minima}°C | Máxima: ${maxima}°C | Média: ${media.toFixed(1)}°C`);

// Contatos de imprensa (e-mail opcional)
const contato1: [nome: string, telefone: string, email?: string] = ['Rita Alves', '(69) 99999-1111', 'rita@jornal.com'];
const contato2: [nome: string, telefone: string, email?: string] = ['Pedro Dias', '(69) 99999-2222'];
console.log(`Contato: ${contato1[0]}, ${contato1[1]}, ${contato1[2]}`);
console.log(`Contato: ${contato2[0]}, ${contato2[1]}, ${contato2[2] ?? '(sem e-mail)'}`);

// Histórico semanal com elemento rest
const historico: [string, ...number[]] = ['Manaus', 31, 32, 30, 33, 31, 29, 30];
const [cidadeHistorico, ...temps] = historico;
const mediaSemanal: number = temps.reduce((soma, t) => soma + t, 0) / temps.length;
console.log(`Média semanal de ${cidadeHistorico}: ${mediaSemanal.toFixed(1)}°C`);

// Tupla somente leitura
const capitalOficial: readonly [string, string] = ['RO', 'Porto Velho'];
// capitalOficial[0] = 'AM'; // Cannot assign to '0' because it is a read-only property. ts(2540)
console.log(`Capital oficial: ${capitalOficial[1]} (${capitalOficial[0]})`);
