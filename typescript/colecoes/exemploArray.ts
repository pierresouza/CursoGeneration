import readlineSync = require("readline-sync");

const numeros: Array<number> = new Array<number>();

numeros.push(7);
numeros.push(5);
numeros.push(1);
numeros.push(7);

for (let numero of numeros) {
  console.log(numero);
}

numeros.push(readlineSync.questionInt("Digite um número: "));

console.log(numeros);

console.log(`\nA posição do número 5 é ${numeros.indexOf(5)}`);
console.log(`\nA posição do número 50 é ${numeros.indexOf(50)}`);
console.log(`\nA posição do número 7 é ${numeros.lastIndexOf(7)}`);

console.log(`\nExiste no array o número 5? ${numeros.includes(5)}`);

//atualização de valor
numeros[numeros.indexOf(5)] = 50;

console.table(numeros);

//Apagar um valor
numeros.splice(numeros.indexOf(10), 1);

console.table(numeros);
