const readlineSync = require("readline-sync");

function lerMatriz() {
  let matriz = [];
  for (let i = 0; i < 3; i++) {
    let linha = [];
    for (let j = 0; j < 3; j++) {
      let elemento = parseInt(readlineSync.question(`Digite o elemento [${i}][${j}] da matriz: `));
      linha.push(elemento);
    }
    matriz.push(linha);
  }
  return matriz;
}

function mostrarDiagonalPrincipal(matriz) {
  let diagonalPrincipal = [];
  for (let i = 0; i < 3; i++) {
    diagonalPrincipal.push(matriz[i][i]);
  }
  console.log("Elementos da Diagonal Principal:");
  console.log(diagonalPrincipal.join(" "));
  return diagonalPrincipal.reduce((a, b) => a + b, 0);
}

function mostrarDiagonalSecundaria(matriz) {
  let diagonalSecundaria = [];
  for (let i = 0; i < 3; i++) {
    diagonalSecundaria.push(matriz[i][2 - i]);
  }
  console.log("Elementos da Diagonal Secundária:");
  console.log(diagonalSecundaria.join(" "));
  return diagonalSecundaria.reduce((a, b) => a + b, 0);
}

function main() {
  let matriz = lerMatriz();

  let somaDiagonalPrincipal = mostrarDiagonalPrincipal(matriz);
  let somaDiagonalSecundaria = mostrarDiagonalSecundaria(matriz);

  console.log("Soma dos Elementos da Diagonal Principal:");
  console.log(somaDiagonalPrincipal);

  console.log("Soma dos Elementos da Diagonal Secundária:");
  console.log(somaDiagonalSecundaria);
}

main();
