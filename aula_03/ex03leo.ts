//Escreva um programa TS que leia um número inteiro do usuário
//e imprima todos os npumeros de 1 a esse npumero que são divisíveis por 3.

namespace ex03leo {
    var num = 40;
    let i = 1;
    let arraydiv3: number[] = []
    while (i <= num) {
      if (i % 3 == 0) {
        console.log(i);
        arraydiv3.push(i);
      }
      i++;
    }
    console.log(arraydiv3);
    
    for(let i = 0; i <= arraydiv3.length; i++){
        console.log(arraydiv3[i]);
    }
  }
  