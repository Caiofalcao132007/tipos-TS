// Exercício 01: Caixa da padaria
const nomeProduto1 = 'Pão francês';
const precoUnitario1 = 0.75;
let quantidade1 = 12;
const nomeProduto2 = 'Bolo de cenoura';
const precoUnitario2 = 18.5;
const quantidade2 = 2;
// Sem anotação: o tipo é inferido
let aberta = true; // tipo inferido: boolean
const subtotal1 = precoUnitario1 * quantidade1;
const subtotal2 = precoUnitario2 * quantidade2;
const total = subtotal1 + subtotal2;
// Separadores numéricos
const paesVendidosNoAno = 1250000;
// Hexadecimal: o console mostra em decimal
const categoria = 0x1A;
console.log(`${nomeProduto1}: ${quantidade1} x R$ ${precoUnitario1.toFixed(2)} = R$ ${subtotal1.toFixed(2)}`);
console.log(`${nomeProduto2}: ${quantidade2} x R$ ${precoUnitario2.toFixed(2)} = R$ ${subtotal2.toFixed(2)}`);
console.log(`Total: R$ ${total.toFixed(2)}`);
console.log(`Padaria aberta? ${aberta}`);
console.log(`Pães vendidos no ano: ${paesVendidosNoAno}`);
console.log(`Categoria: ${categoria}`);
export {};
// Erro provocado:
// quantidade1 = 'doze'; // Type 'string' is not assignable to type 'number'. ts(2322)
