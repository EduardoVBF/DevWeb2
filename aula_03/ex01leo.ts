//Escreva um programa TS que imprima todos os números primos de 1 a 53 usando a função *WHILE*

namespace ex01leo {
    let index: number = 2;
    let aux: number = 1;
    let count: number = 0;
    while (index <= 53) {
        count = 0;
        aux = 1;
        //lógica para descobrir se é primo
        while(aux <= index) {
            if (index % aux == 0) {
                count++;
            } 
            if (count > 2) {
                break;
            }
            aux++;
        }
        if (count <= 2) {
            console.log(index)
        }
        index++;
    }
}