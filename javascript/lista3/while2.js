const leia = require("readline-sync");

let menorQue21 = 0;
let maiorQue50 = 0;

while (true) {
  idade = leia.questionInt("Digite sua idade: ");

  if (idade < 0) {
    break;
  }

  if (idade < 21) {
    menorQue21++;
  } else if (idade > 50) {
    maiorQue50++;
  }
}

console.log(`Total de pessoas com menos de 21 anos: ${menorQue21}`);
console.log(`Total de pessoas com mais de 50 anos: ${maiorQue50}`);
