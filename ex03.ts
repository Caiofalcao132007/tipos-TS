export {};

// Exercício 03: Ficha de paciente

// Paciente com todos os campos
let paciente: {
  readonly cpf: string;
  nome: string;
  idade: number;
  plano: boolean;
  alergias?: string[];
  contatoEmergencia?: { nome: string; telefone: string };
} = {
  cpf: '123.456.789-00',
  nome: 'Ana Souza',
  idade: 34,
  plano: true,
  alergias: ['dipirona', 'lactose'],
  contatoEmergencia: { nome: 'Paulo Souza', telefone: '(69) 99999-0000' },
};

// Paciente só com os campos obrigatórios
let paciente2: {
  readonly cpf: string;
  nome: string;
  idade: number;
  plano: boolean;
  alergias?: string[];
  contatoEmergencia?: { nome: string; telefone: string };
} = {
  cpf: '987.654.321-00',
  nome: 'Carlos Lima',
  idade: 61,
  plano: false,
};

function resumo(p: { nome: string; idade: number; alergias?: string[] }): string {
  const alergias: string =
    p.alergias !== undefined && p.alergias.length > 0
      ? `Alergias: ${p.alergias.join(', ')}`
      : 'Sem alergias registradas';
  return `${p.nome}, ${p.idade} anos. ${alergias}`;
}

console.log(resumo(paciente));
console.log(resumo(paciente2));

// Erros provocados:
// paciente.cpf = '000.000.000-00'; // Cannot assign to 'cpf' because it is a read-only property. ts(2540)
// paciente.peso = 70; // Property 'peso' does not exist on type '{ readonly cpf: string; nome: string; ... }'. ts(2339)

// Reflexão:
let dados: object = paciente;
// console.log(dados.nome); // Property 'nome' does not exist on type 'object'. ts(2339)
// Por que dá erro: o tipo object só diz "isto é um valor não primitivo" (objeto, array, função).
// Ele não informa quais propriedades existem, então o compilador não deixa acessar dados.nome.

let x: {} = 10; // aceito
// let y: object = 10; // Type 'number' is not assignable to type 'object'. ts(2322)
// Por que let x: {} = 10 é aceito: {} significa "qualquer valor que não seja null ou undefined",
// e isso inclui primitivos como number (o 10 é "embrulhado" em Number).
// Já object aceita somente valores não primitivos, por isso 10 não serve.
console.log(typeof dados, x);
