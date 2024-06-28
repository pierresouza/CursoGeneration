const readline = require("readline-sync");

// Função para obter o produto e o preço com base no código
function codigoProduto(codigo) {
  switch (codigo) {
    case 1:
      return { produto: "Cachorro Quente", preco: 10.0 };
    case 2:
      return { produto: "X-Salada", preco: 15.0 };
    case 3:
      return { produto: "X-Bacon", preco: 18.0 };
    case 4:
      return { produto: "Bauru", preco: 12.0 };
    case 5:
      return { produto: "Refrigerante", preco: 8.0 };
    case 6:
      return { produto: "Suco de laranja", preco: 13.0 };
    default:
      return null;
  }
}

// Lê o código do produto do usuário
const codigo = parseInt(readline.question("Código do Produto: "));

// Verifica se o código é válido
const produtoInfo = codigoProduto(codigo);

if (produtoInfo) {
  // Lê a quantidade do usuário
  const quantidade = parseInt(readline.question("Quantidade: "));

  // Calcula o valor total
  const valorTotal = produtoInfo.preco * quantidade;

  // Exibe o nome do produto e o valor total
  console.log(`Produto: ${produtoInfo.produto}`);
  console.log(`Valor total: R$ ${valorTotal.toFixed(2)}`);
} else {
  console.log("Código de produto inválido. Por favor, digite um código entre 1 e 6.");
}
