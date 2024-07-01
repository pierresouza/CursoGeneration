import readlineSync = require("readline-sync");

let numero1: number;
let numero2: number;

numero1 = readlineSync.questionFloat("Digite o primeiro número: ");
numero2 = readlineSync.questionFloat("Digite o segundo número: ");

console.log(`Soma ${numero1} + ${numero2} = ${numero1 + numero2}`);
console.log(`Subtração ${numero1} - ${numero2} = ${numero1 - numero2}`);
console.log(`Multiplicação ${numero1} * ${numero2} = ${numero1 * numero2}`);
console.log(`Divisão ${numero1} / ${numero2} = ${numero1 / numero2}`);
