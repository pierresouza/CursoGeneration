const leia = require("readline-sync");

let numero, numero2, contador;

for (contador = 1; contador <= 4; contador++) {
  numero = leia.question("Calcule a multiplicação de: ");
  numero2 = leia.question("vezes o numero: ");
  console.log(numero + " x " + numero2 + " = " + numero * contador);

  // verifica se o número é par
  if (numero % 2 == 0) {
    cont++;
  }

  console.log("Quantidade de números pares: " + cont);
}
