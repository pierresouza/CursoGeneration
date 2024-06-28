const leia = require("readline-sync");

let numA;
let numB;
let numC;

numA = leia.questionInt("Digite o primeiro numero: ");
numB = leia.questionInt("Digite o segundo numero: ");
numC = leia.questionInt("Digite o terceiro numero: ");

if (numA + numB > numC) {
  console.log("A soma de A e B é maior que C");
} else if (numA + numB < numC) {
  console.log("A soma de A e B é menor que C");
} else {
  console.log("A soma de A e B é igual a C");
}
