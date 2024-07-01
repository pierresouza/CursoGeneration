const leia = require("readline-sync");

let vetor = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6];

for (let contador = 0; contador < vetor.length; contador++) {
  console.log(`Posição[${contador}] = ${vetor[contador]}`);
}

const numero = leia.questionInt("Digite um numero: ");

let posicao = vetor.indexOf(numero);
if (posicao !== -1) {
  console.log(`O número ${numero} está na posição ${posicao}.`);
} else {
  console.log("Não foi encontrado!");
}
