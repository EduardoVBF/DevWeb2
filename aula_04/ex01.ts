//Crie um array com 5 números. Em seguida, use um loop FOR para iterar
//sobre o array e exibir a soma de todos os números.

namespace ex01{
    //Crie um array com 5 números.
    let lista: number[] = [1, 10, 20, 30, 40];
    let soma: number = 0;
    //use um loop FOR para iterar sobre o array
    for(let i=0;i<lista.length;i++){
        //soma de todos os números.
        soma = soma + lista[i];
    }
    //exibir
    console.log(`A soma dos valores do array é: ${soma}`)
}