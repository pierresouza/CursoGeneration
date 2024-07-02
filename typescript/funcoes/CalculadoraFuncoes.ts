import readlineSync = require("readline-sync");

let numero1: number;
let numero2: number;

//Escopo do programa
numero1 = readlineSync.questionFloat("Digite o primeiro numero: ");
numero2 = readlineSync.questionFloat("Digite o segundo numero: ");

console.log(`Soma ${numero1} + ${numero2} = ${somar(numero1, numero2)}`);
console.log(`Subtração ${numero1} - ${numero2} = ${subtrair(numero1, numero2)}`);
console.log(`Multiplicação ${numero1} * ${numero2} = ${multiplicar(numero1, numero2)}`);

let resultadoDivisao = dividir(numero1, numero2);

if (resultadoDivisao !== null) {
  console.log(`\nDivisão ${numero1} / ${numero2} = ${resultadoDivisao}`);
} else {
  console.log("Não existe divisão por zero");
}

autor();

//Escopo da função
function somar(numero1: number, numero2: number): number {
  return numero1 + numero2;
}

function subtrair(numero1: number, numero2: number): number {
  return numero1 - numero2;
}

function multiplicar(numero1: number, numero2: number): number {
  return numero1 * numero2;
}

function dividir(numero1: number, numero2: number): number | null {
  let divisao: number = numero1 / numero2;
  //Condicional ternario(condicional ? caso verdade : caso falso)
  return divisao !== Infinity ? divisao : null;

  // if(divisao !== Infinity){
  //   return divisao;
  // } else {
  //   return null;
  // }
}

function autor(): void {
  console.log("Feito por Pierre");
}
