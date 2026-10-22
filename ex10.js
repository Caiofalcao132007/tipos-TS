// ---------- Enum ----------
var SituacaoTicket;
(function (SituacaoTicket) {
    SituacaoTicket["Aberto"] = "ABERTO";
    SituacaoTicket["Pago"] = "PAGO";
})(SituacaoTicket || (SituacaoTicket = {}));
// ---------- Tarifa ----------
function calcularTarifa(v, horas) {
    const adicionais = horas - 1;
    switch (v.tipo) {
        case 'carro':
            return 8 + adicionais * 5;
        case 'moto':
            return 4 + adicionais * 2;
        case 'caminhao':
            return 15 + adicionais * 10;
        default: {
            const _naoTratado = v;
            return _naoTratado;
        }
    }
}
// Teste da verificação exaustiva (comentado):
// type Van = { readonly placa: Placa; tipo: 'van'; lugares: number };
// type Veiculo = Carro | Moto | Caminhao | Van;
// Erro no default: Type 'Van' is not assignable to type 'never'. ts(2322)
// O never garantiu que o compilador avisa quando um novo tipo entra na união
// e o switch não trata esse caso, evitando esquecer uma tarifa.
// ---------- Fechar ticket ----------
function horasCobradas(p) {
    const [entrada, saida] = p;
    return Math.max(saida - entrada, 1);
}
function fecharTicket(t) {
    const horas = horasCobradas(t.periodo);
    const bruto = calcularTarifa(t.veiculo, horas);
    const valor = t.selo ? bruto * 0.5 : bruto;
    return { ...t, valor, situacao: SituacaoTicket.Pago };
}
function registrar(msg) {
    console.log(msg);
}
function descreverTicket(t) {
    const valor = t.valor ?? 0;
    const seloTexto = t.selo ? ' (selo -50%)' : '';
    return `[${t.situacao}] ${t.veiculo.placa} (${t.veiculo.tipo}) - ${horasCobradas(t.periodo)}h - R$ ${valor.toFixed(2)}${seloTexto}`;
}
// ---------- Entrada externa com unknown ----------
function falhar(mensagem) {
    throw new Error(mensagem);
}
function lerVeiculo(json) {
    let dados;
    try {
        dados = JSON.parse(json);
    }
    catch (erro) {
        return falhar('JSON malformado');
    }
    if (typeof dados !== 'object' || dados === null) {
        return falhar('dados inválidos');
    }
    if (!('placa' in dados) || typeof dados.placa !== 'string') {
        return falhar('campo "placa" inválido');
    }
    if (!('tipo' in dados)) {
        return falhar('campo "tipo" ausente');
    }
    const placa = dados.placa;
    switch (dados.tipo) {
        case 'carro': {
            if (!('portas' in dados)) {
                return falhar('campo "portas" inválido');
            }
            const portas = dados.portas;
            if (portas !== 2 && portas !== 4) {
                return falhar('campo "portas" inválido');
            }
            return { placa, tipo: 'carro', portas };
        }
        case 'moto': {
            if (!('cilindradas' in dados) || typeof dados.cilindradas !== 'number') {
                return falhar('campo "cilindradas" inválido');
            }
            return { placa, tipo: 'moto', cilindradas: dados.cilindradas };
        }
        case 'caminhao': {
            if (!('eixos' in dados) || typeof dados.eixos !== 'number') {
                return falhar('campo "eixos" inválido');
            }
            return { placa, tipo: 'caminhao', eixos: dados.eixos };
        }
        default:
            return falhar(`tipo "${String(dados.tipo)}" desconhecido`);
    }
}
// ---------- Dados de teste ----------
const entradas = [
    { json: '{"placa":"ABC1D23","tipo":"carro","portas":4}', periodo: [8, 11], selo: false },
    { json: '{"placa":"MOT0A12","tipo":"moto","cilindradas":160}', periodo: [9, 10], selo: false },
    { json: '{"placa":"CAM9Z99","tipo":"caminhao","eixos":3}', periodo: [7, 12], selo: false },
    { json: '{"placa":"XYZ4E56","tipo":"carro","portas":2}', periodo: [14, 16], selo: true },
];
const abertos = entradas.map((e) => ({
    veiculo: lerVeiculo(e.json),
    periodo: e.periodo,
    selo: e.selo,
    situacao: SituacaoTicket.Aberto,
}));
// ---------- Relatório ----------
const fechados = abertos.map(fecharTicket);
fechados.map(descreverTicket).forEach(registrar);
const faturamento = fechados
    .filter((t) => t.situacao === SituacaoTicket.Pago)
    .reduce((soma, t) => soma + (t.valor ?? 0), 0);
console.log(`Faturamento: R$ ${faturamento.toFixed(2)}`);
const entradasPorTipo = abertos.reduce((acc, t) => {
    acc[t.veiculo.tipo] += 1;
    return acc;
}, { carro: 0, moto: 0, caminhao: 0 });
console.log(`Entradas: carro=${entradasPorTipo.carro}, moto=${entradasPorTipo.moto}, caminhao=${entradasPorTipo.caminhao}`);
try {
    lerVeiculo('{"placa":"BIK0001","tipo":"bicicleta"}');
}
catch (erro) {
    if (erro instanceof Error) {
        console.log(`Erro ao ler veículo: ${erro.message}`);
    }
}
export {};
