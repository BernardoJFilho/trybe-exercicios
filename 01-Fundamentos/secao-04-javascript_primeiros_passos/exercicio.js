let inss;
let ir;
let salario = 3000;

if (salario <= 1556.94) {
  inss = 0.08;
  ir = 1;
  console.log(salario - salario * inss * ir);
} else if (salario <= 2594.92 && salario <= 2826.65) {
  inss = 0.09;
  ir = 0.075;
  console.log(salario - (salario * inss + salario * ir));
} else if (salario <= 5189.82 && salario <= 2826.65) {
  inss = 0.11;
  ir = 0.075;
  console.log(salario - (salario * inss + salario * ir));
} else if (salario <= 5189.82 && salario <= 3751.05) {
  inss = 0.11;
  ir = 0.15;
  console.log(salario - (salario * inss + salario * ir));
} else if (salario <= 5189.82 && salario <= 4664.68) {
  inss = 0.11;
  ir = 0.225;
  console.log(salario - (salario * inss + salario * ir));
} else if (salario >= 5189.82 && salario >= 4664.68) {
  inss = 570.88;
  ir = 0.275;
  console.log(salario - (inss + salario * ir));
}

// const custo = 20;
// const venda = 70;
// let lucro = venda - (custo + custo * 0.2);

// if (custo > 0 && venda > 0) {
//   console.log("seu lucro é de = R$" + lucro * 1000);
// } else {
//   console.log("error digite um valor valido");
// }

// let peca = "bispo";

// switch (peca.toLowerCase()) {
//   case "peão":
//     console.log("anda uma casa para frente");
//     break;
//   case "bispo":
//     console.log("move-se em diagonal");
//     break;
//   case "cavalo":
//     console.log("move-se em L");
//     break;
//   case "torre":
//     console.log("move-se para a esquerda, direita, para cima e para baixo");
//     break;
//   case "dama":
//     console.log("move-se para qualquer lado");
//     break;
//   case "rei":
//     console.log("move-se para qualquer lado, mais apenas uma casa de cada vez");
//     break;
// }

// const numero1 = 6;
// const numero2 = 6;
// const numero3 = 793828173187;
// const divisor = 2;

// if (
//   numero1 % divisor === 1 ||
//   numero2 % divisor === 1 ||
//   numero3 % divisor === 1
// ) {
//   console.log("true");
// } else {
//   console.log("false");
// }

// const a = 60;
// const b = 60;
// const c = 6;
// let nota = -5;

// if (nota >= 90) {
//   console.log("A");
// } else if (nota >= 80) {
//   console.log("B");
// } else if (nota >= 70) {
//   console.log("C");
// } else if (nota >= 60) {
//   console.log("D");
// } else if (nota >= 50) {
//   console.log("E");
// } else if (nota < 50 && nota >= 0) {
//   console.log("F");
// } else {
//   console.log("error, favor inserir uma nota valida");
// }

// if (a + b + c === 180) {
//   console.log("true");
// } else {
//   console.log("false");
// }

// if (a > 0) {
//   console.log("positive");
// } else if (a < 0) {
//   console.log("negative");
// } else {
//   console.log("zero");
// }

// if (a > b && a > c) {
//   console.log("a é maior q b e c");
// } else if (b > a && b > c) {
//   console.log("b é maior q a e c");
// } else if (c > a && c > b) {
//   console.log("c é maior q a e b");
// }

// console.log(a + b)
// console.log(a - b)
// console.log(a * b)
// console.log(a / b)
// console.log(a % b)
