//Escreva um programa TS que leia um número inteiro do usuário
//e imprima todos os npumeros de 1 a esse npumero que são divisíveis por 3.

namespace ex03 {
  var num = 40;
  let i = 1;
  while (i <= num) {
    if (i % 3 == 0) {
      console.log(i);
    }
    i++;
  }
}
