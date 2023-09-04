//Escreva um programa TS que leia uma lista de números inteiros do usuário, e implima o 
//maior npumero inserido.     let lista: number[] = [1, 2, 3, 4]

namespace ex02 {
    // Lista de números inteiros
const lista: number[] = [1, 2, 3, 4];

// Função para encontrar o maior número em uma lista
function Maior(lista: number[]): number {
  return Math.max(...lista);
}

// Encontrar e imprimir o maior número
const maiorNumero = Maior(lista);
console.log(`O maior número na lista é: ${maiorNumero}`);
}