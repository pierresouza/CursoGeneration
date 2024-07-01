const leia = require("readline-sync");

let primeiroNumero;
let segundoNumero;

primeiroNumero = leia.questionInt("Digite o primeiro numero do intervalo: ");
segundoNumero = leia.questionInt("Digite o ultimo numero do intervalo: ");

if (primeiroNumero >= segundoNumero) {
  console.log("Intervalo inválido!");
} else {
  console.log(`No Intervalo entre ${primeiroNumero} e ${segundoNumero}:`);
  for (let numero = primeiroNumero; numero <= segundoNumero; numero++) {
    if (numero % 3 === 0 && numero % 5 === 0) {
      console.log(`${numero} é multiplo de 3 e 5`);
    }
  }
}
