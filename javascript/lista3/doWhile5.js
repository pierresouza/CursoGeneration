const leia = require("readline-sync");

let numero = 0; // recebe entrada de dados
let soma = 0; // resultado final da soma dos números positivos

do {
  numero = leia.questionFloat("Digite um número: ");

  if (numero === 0) {
    break;
  }

  if (numero > 0) {
    soma += numero;
  }
} while (true);

console.log(`A soma dos números positivos é ${soma}`);
