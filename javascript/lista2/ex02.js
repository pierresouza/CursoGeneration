const leia = require("readline-sync");

let numero;

numero = leia.questionFloat("Digite um número: ");

if (numero % 2 == 0 && numero > 0) {
  console.log(`O Numero ${numero} é par e positivo`);
} else if (numero % 2 == 0 && numero < 0) {
  console.log(`O Numero ${numero} é par e negativo`);
} else if (numero % 2 != 0 && numero > 0) {
  console.log(`O Numero ${numero} é impar e positivo`);
} else {
  console.log(`O Numero ${numero} é impar e negativo`);
}
