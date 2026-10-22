// Exercício 08: Formulário de cadastro
let codigo = 'CLI-0042';
function formatarCodigo(c) {
    if (typeof c === 'number') {
        return `CLI-${c.toString().padStart(4, '0')}`;
    }
    // aqui c é string: mantém só os dígitos
    return `CLI-${c.replace(/\D/g, '').padStart(4, '0')}`;
}
const camiseta = 'M';
function calcularFrete(regiao) {
    switch (regiao) {
        case 'norte':
            return 25;
        case 'nordeste':
            return 20;
        case 'centro-oeste':
            return 18;
        case 'sudeste':
            return 12;
        case 'sul':
            return 15;
    }
}
function formatarEndereco(rua, numero, complemento) {
    if (complemento === null) {
        return `${rua}, ${numero} - (sem complemento)`;
    }
    return `${rua}, ${numero} - ${complemento}`;
}
function limparTelefone(tel) {
    return String(tel).replace(/\D/g, '');
}
console.log(`Cliente: ${formatarCodigo(codigo)} | Camiseta: ${camiseta}`);
console.log(`Código vindo do sistema novo: ${formatarCodigo(42)}`);
console.log(`Entrega: ${formatarEndereco('Rua das Flores', 100, null)}`);
const r = 'sul';
console.log(`Frete para o ${r}: R$ ${calcularFrete(r).toFixed(2)}`);
console.log(`Telefone: ${limparTelefone('(69) 99999-0000')}`);
console.log(`Telefone: ${limparTelefone(69999990000)}`);
// Inferência de literais:
// const r = 'sul' tem o tipo literal 'sul', que cabe em calcularFrete.
// let r2 = 'sul' tem o tipo string (o TypeScript alarga o tipo porque a variável pode mudar).
let r2 = 'sul';
// calcularFrete(r2); // Argument of type 'string' is not assignable to parameter of type '"norte" | "nordeste" | "centro-oeste" | "sudeste" | "sul"'. ts(2345)
// Correção com as const:
let r3 = 'sul';
console.log(`Frete corrigido: R$ ${calcularFrete(r3).toFixed(2)}`);
console.log(r2);
export {};
