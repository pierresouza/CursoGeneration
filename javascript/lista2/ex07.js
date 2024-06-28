const readline = require("readline-sync");

// Função para realizar as operações matemáticas
function calcularOperacao(numero1, numero2, operacao) {
  switch (operacao) {
    case 1:
      return numero1 + numero2;
    case 2:
      return numero1 - numero2;
    case 3:
      return numero1 * numero2;
    case 4:
      // Verifica se o segundo numero não é zero antes de dividir
      if (numero2 !== 0) {
        return numero1 / numero2;
      } else {
        return "Divisão por zero não é possível";
      }
    default:
      return "Operação Inválida!";
  }
}

// Lê o primeiro numero do usuário
const numero1 = parseFloat(readline.question("Digite o 1 numero: "));

// Lê o segundo numero do usuário
const numero2 = parseFloat(readline.question("Digite o 2 numero: "));

// Lê o código da operação do usuário
const operacao = parseInt(readline.question("Operacao 1 - Soma, 2 - Subtracao, 3 - Multiplicacao, 4 - Divisao: "));

// Realiza a operação selecionada
const resultado = calcularOperacao(numero1, numero2, operacao);

// Exibe o resultado da operação
if (typeof resultado === "number") {
  console.log(`${numero1} ${obterSimboloOperacao(operacao)} ${numero2} = ${resultado}`);
} else {
  console.log(resultado);
}

// Função auxiliar para obter o símbolo da operação
function obterSimboloOperacao(operacao) {
  switch (operacao) {
    case 1:
      return "+";
    case 2:
      return "-";
    case 3:
      return "*";
    case 4:
      return "/";
    default:
      return "?";
  }
}
