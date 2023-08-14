//faça um programa que receba 3 valores e calcule uma média ponderada entre eles

namespace ex03 {
  let v1: number, v2: number, v3: number;

  v1 = 8;
  v2 = 3;
  v3 = 0;

  let p1: number, p2: number, p3: number;

  p1 = 3;
  p2 = 5;
  p3 = 2;

  let situacao: boolean = v3 != 0 ? true : false;
  if(situacao && v2 >= 5){
    let media: number = (v1 * p1 + v2 * p2 + v3 * p3)/(p1 + p2 + p3);
    console.log (`A média final é de ${media}.`)
  } else {
    console.log(`O aluno não entregou o trabalho e sua média foi 0.0`)
  }
}
