// Desafio - Loja

// Crie:

// produto
// preco
// quantidade

// Calcule:

// total = preco * quantidade

// Se o total for maior que R$500:

// Desconto de 15%

// Caso contrário:

// Sem desconto

// Mostre o total.
let produto = "mamadeira";
let preco = 30;
let quantidade = 5;
let total = preco * quantidade;
console.log(`valor e: ${preco * quantidade}`);
if (total >= 500) {
  console.log(`desconto de 15%${(total = (total * 0, 15))}`);
} else {
  console.log(`sem desconto`);
}
