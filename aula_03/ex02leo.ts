//Escreva um programa TS que leia uma lista de números inteiros do usuário, e implima o 
//maior npumero inserido.     let lista: number[] = [1, 2, 3, 4]

namespace ex02leo {
  // Lista de números inteiros
  let lista: number[] = [2, 7, -1, 3, 40, 12];
  let maior: number = lista[0];

  for (let i = 1; i <= lista.length; i++) {
    if(maior < lista[i]) {
      maior=lista[i];
    }
  }

  console.log(`O maior número na lista é: ${maior}`)
  console.log(`O maior número na lista é: ${Math.max(...lista)}`)
}