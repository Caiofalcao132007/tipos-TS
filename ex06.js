// Exercício 06: Status do pedido no app de delivery
var StatusPedido;
(function (StatusPedido) {
    StatusPedido[StatusPedido["Recebido"] = 1] = "Recebido";
    StatusPedido[StatusPedido["EmPreparo"] = 2] = "EmPreparo";
    StatusPedido[StatusPedido["SaiuParaEntrega"] = 3] = "SaiuParaEntrega";
    StatusPedido[StatusPedido["Entregue"] = 4] = "Entregue";
    StatusPedido[StatusPedido["Cancelado"] = 5] = "Cancelado";
})(StatusPedido || (StatusPedido = {}));
var FormaPagamento;
(function (FormaPagamento) {
    FormaPagamento["PIX"] = "PIX";
    FormaPagamento["CARTAO"] = "CARTAO";
    FormaPagamento["DINHEIRO"] = "DINHEIRO";
})(FormaPagamento || (FormaPagamento = {}));
function mensagem(status) {
    switch (status) {
        case StatusPedido.Recebido:
            return 'Recebemos seu pedido!';
        case StatusPedido.EmPreparo:
            return 'Seu pedido está sendo preparado 🍳';
        case StatusPedido.SaiuParaEntrega:
            return 'O entregador está a caminho 🛵';
        case StatusPedido.Entregue:
            return 'Pedido entregue. Bom apetite!';
        case StatusPedido.Cancelado:
            return 'Pedido cancelado.';
    }
}
function avancar(status) {
    if (status === StatusPedido.Entregue || status === StatusPedido.Cancelado) {
        return status;
    }
    return status + 1;
}
function mostrar(status) {
    // StatusPedido[status] é o mapeamento reverso (número -> nome)
    console.log(`[${status} - ${StatusPedido[status]}] ${mensagem(status)}`);
}
let status = StatusPedido.Recebido;
mostrar(status);
while (status !== StatusPedido.Entregue) {
    status = avancar(status);
    mostrar(status);
}
const pagamento = FormaPagamento.PIX;
console.log(`Pagamento: ${pagamento}`);
export {};
// Erro provocado:
// const outro: FormaPagamento = 'PIX'; // Type '"PIX"' is not assignable to type 'FormaPagamento'. ts(2322)
// Por quê: um enum de string é um tipo próprio. Mesmo com o mesmo texto, a string 'PIX'
// não é um FormaPagamento; é preciso usar FormaPagamento.PIX.
