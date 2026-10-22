export {};

// Exercício 07: Central de notificações

type Notificador = (destinatario: string, mensagem: string) => void;

const porEmail: Notificador = (destinatario, mensagem) => {
  console.log(`[E-MAIL] para ${destinatario}: ${mensagem}`);
};

const porSms: Notificador = (destinatario, mensagem) => {
  if (mensagem.length > 160) {
    console.log('SMS ignorado: mensagem longa');
    return;
  }
  console.log(`[SMS] para ${destinatario}: ${mensagem}`);
};

const porApp: Notificador = (destinatario, mensagem) => {
  console.log(`[APP] para ${destinatario}: ${mensagem}`);
};

function notificarTodos(destinatarios: string[], mensagem: string, enviar: Notificador): void {
  destinatarios.forEach((destinatario) => enviar(destinatario, mensagem));
}

const aviso: string = 'Reunião de pais sexta às 19h';
const avisoLongo: string = 'Reunião de pais sexta às 19h. '.repeat(8);

notificarTodos(['ana@escola.com'], aviso, porEmail);
notificarTodos(['joao.resp'], aviso, porApp);
notificarTodos(['(69) 99999-0000'], aviso, porSms);
notificarTodos(['(69) 99999-0000'], avisoLongo, porSms);

// Erro provocado:
// function teste(): void { return 10; } // Type 'number' is not assignable to type 'void'. ts(2322)

// Reflexão:
const contar: Notificador = (d, m) => m.length; // aceito
// Quando o tipo de função tem retorno void, o TypeScript aceita funções que retornam qualquer coisa,
// pois quem chama o callback ignora o valor retornado. Assim, funções como arr.forEach(x => lista.push(x))
// continuam funcionando mesmo retornando algo. A regra vale só para tipos de função;
// uma função declarada diretamente com ": void" não pode retornar valor.
console.log(`Tamanho da mensagem: ${contar('x', aviso)}`);
