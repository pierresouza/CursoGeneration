import { Queue } from "../interface/Queue";

const fila = new Queue<number>();

for (let i = 1; i <= 10; i++) {
  fila.enqueue(i);
}

console.log("\nExibir toidos os Elementos : ");
fila.printQueue();

console.log("\nRemover Elemento: " + fila.dequeue());

fila.printQueue();

console.log("\nPrimeiro Elemento: " + fila.peek());

console.log("\nChecar se elemento existe na fila " + fila.contains(4));

fila.clear();

console.log("\nA fila está vazia? " + fila.isEmpty());
