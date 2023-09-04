//Escreva um programa TS que imprima todos os números primos de 1 a 53 usando a função *WHILE*

// namespace ex01 {
//     let num: number = 1
//   while (num >= 1 && num <= 53) {
//     if () {
//       console.log(`O número ${num} é primo`);
//     }
//     num++;
//   }
// }

namespace ex01 {
  let number = 2;

  while (number <= 53) {
    let Primo = true;

    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        Primo = false;
      }
    }
    if (Primo) {
      console.log(number);
    }
    number++;
  }
}
