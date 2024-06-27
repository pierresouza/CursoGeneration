const leia = require("readline-sync");

let nome;
let codigo;

nome = leia.question("\nDigite o seu nome: ");

console.log("\n 1 -- De 0 a 10 anos ");
console.log("\n 2 -- De 11 a 29 anos ");
console.log("\n 3 -- De 30 a 45 anos ");
console.log("\n 4 -- De 46 a 59 anos");
console.log("\n 5 -- De 60 a 65 anos ");
console.log("\n 6 -- Acima de 65 anos ");

codigo = leia.questionInt("\nDigite o codigo da sua faixa etaria: ");

switch(codigo){
  case 1:
    console.log(`\n${nome}, você está na faixa etária de 0 a 10 anos.`);
    break;
  case 2:
    console.log(`\n${nome}, você está na faixa etária de 11 a 29 anos.`);
    break;
  case 3:
    console.log(`\n${nome}, você está na faixa etária de 30 a 45 anos.`);
    break;
  case 4:
    console.log(`\n${nome}, você está na faixa etária de 46 a 59 anos.`);
    break;
  case 5:
    console.log(`\n${nome}, você está na faixa etária de 60 a 65 anos.`);
    break;
  case 6:
    console.log(`\n${nome}, você está na faixa etária acima de 65 anos.`);
    break;
  default:
    console.log("\nCódigo inválido.");
}