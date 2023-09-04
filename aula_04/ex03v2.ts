//Crie um array vazio. Em seguida use o método **`push()`** para adicionar
//3 números ao array. Em seguida, use o método **`pop()`** para remover
//o último número do array e exibir o array resultante.

namespace ex03v2 {
    function criarNovoArray(num1: number, num2: number, num3: number) {
        let array: number[] = [];
        array.push(num1, num2, num3);
        return array;
    }

    let lista: number[] = criarNovoArray(55, 2, 7);
    console.log(lista)

    function removeValor(array: number[]){
        if(array.length > 0) {
            array.pop();
        }
        return array;
    }
    let listaFinal = removeValor(lista);
    console.log(listaFinal);
}