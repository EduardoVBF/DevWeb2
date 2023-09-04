//Crie um array com 3 nomes de frutas. Em seguida, use um loop while 
//para iterar sobre o array e exibir cada fruta em linha separada

namespace ex02 {
    //Crie um array com 3 nomes de frutas.
    let frutas: string[] = ['uva', 'banana', 'goiaba'];
    let i: number =0;
    //Em seguida, use um loop while para iterar sobre o array
    while (i < frutas.length) {
        //exibir cada fruta em linha separada
        console.log(`Fruta da posição ${i+1} é: ${frutas[i]}`);
        i ++; //adicionar 1 no contador para 'andar' no array
    }
}