// Exercício 04: Lista de compras do mês
const itens = [
    { nome: 'Arroz 5kg', preco: 28.9, quantidade: 1 },
    { nome: 'Feijão 1kg', preco: 8.49, quantidade: 2 },
    { nome: 'Leite 1L', preco: 4.99, quantidade: 6 },
    { nome: 'Café 500g', preco: 17.9, quantidade: 1 },
    { nome: 'Sabão em pó', preco: 12.5, quantidade: 1 },
];
const nomes = itens.map((item) => item.nome);
const caros = itens.filter((item) => item.preco > 10);
const total = itens.reduce((soma, item) => soma + item.preco * item.quantidade, 0);
console.log(`Itens: ${nomes.join(', ')}`);
console.log(`Acima de R$ 10: ${caros.map((item) => item.nome).join(', ')}`);
console.log(`Total da compra: R$ ${total.toFixed(2)}`);
// Array somente leitura
const categorias = ['Mercearia', 'Laticínios', 'Limpeza'];
// categorias.push('Bebidas'); // Property 'push' does not exist on type 'readonly string[]'. ts(2339)
// Matriz: quantidade de itens em cada posição de cada prateleira
const despensa = [[2, 0, 1], [4, 4], [1]];
const itensNaDespensa = despensa.reduce((soma, prateleira) => soma + prateleira.reduce((s, n) => s + n, 0), 0);
console.log(`Itens na despensa: ${itensNaDespensa}`);
// Desestruturação e spread
const [primeiro, segundo] = itens;
console.log(`Primeiro: ${primeiro.nome} | Segundo: ${segundo.nome}`);
const novaLista = [...itens, { nome: 'Açúcar 1kg', preco: 5.5, quantidade: 1 }];
console.log(`Lista original: ${itens.length} itens | Nova lista: ${novaLista.length} itens`);
console.log(`Categorias: ${categorias.join(', ')}`);
export {};
