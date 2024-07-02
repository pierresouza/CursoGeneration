import readline from "readline-sync";
import { Queue } from "../interface/Queue";

const leia = readline.question;
const fila = new Queue<string>();

console.log("********************************");
console.log("\n1 - Adicionar Livro na Fila");
console.log("\n2 - Listar todos os Livros");
console.log("\n3 - Retirar Livro da Fila");
console.log("\n0 - Sair");
console.log("********************************");
console.log("Entre com a opção desejada:");

let opcao = readline.question("Digite a opção desejada: ");

while (opcao !== "0") {
  switch (opcao) {
    case "1":
      let nome = leia("Digite o nome do Livro: ");
      fila.enqueue(nome);
      break;
    case "2":
      fila.printQueue();
      break;
    case "3":
      fila.dequeue();
      break;
    default:
      console.log("Opção inválida!");
  }
  opcao = leia("Digite a opção desejada: ");
}
