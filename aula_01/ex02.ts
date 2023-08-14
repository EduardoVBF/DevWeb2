//faça um programa que recebe 3 valores e retorne a média aritmética entre eles

namespace ex02 {
    let v1: number, v2: number, v3: number;

    v1 = 5;
    v2 = 8;
    v3 = 2;

    let res = (v1+v2+v3)/3;
    console.log (`A média entre os 3 valores é de ${res}`);

    if (res < 3) {
        console.log(`Reprovado`);
    } else if (res < 7){
        console.log('Recuperação');
    } else {
        console.log ('Aprovado');
    }
}