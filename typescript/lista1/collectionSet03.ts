import readlineSync = require("readline-sync");

const numeros = new Set<number>();

for (let i = 0; i < 10; i++) {
  const numero = readlineSync.questionInt("Digite um número: ");
  numeros.add(numero);
}

console.log("Listar dados do Set:" + Array.from(numeros).join(", "));
