import readlinesync = require("readline-sync");

// Array para armazenar as cores
let cores = [];

// Solicitar ao usuário que digite 5 cores
for (let i = 0; i < 5; i++) {
  let cor = readlinesync.question(`Digite a cor ${i + 1}: `);
  cores.push(cor);
}

// Exibir todas as cores adicionadas
console.log("\nListar todas as cores:");
cores.forEach((cor) => console.log(cor));

// Ordenar as cores em ordem crescente
let coresOrdenadas = [...cores].sort();

// Exibir as cores ordenadas
console.log("\nOrdenar as cores:");
coresOrdenadas.forEach((cor) => console.log(cor));
