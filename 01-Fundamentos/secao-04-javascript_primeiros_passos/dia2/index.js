// let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

// for(let index = 0; index < groceryList.length; index += 1){
//     console.log(groceryList[index]);
// }

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let media = 0;
let maior = 0;
let divisor = numbers.length;
let impar = 0;

for (let index = 0; index < numbers.length; index += 1) {
  soma += numbers[index];
  //   media += numbers[index] / divisor;
  if (numbers[index] > maior) {
    maior = numbers[index];
  }
}

console.log(maior);

if (media > 20) {
  console.log("valor maior que 20");
} else if (media <= 20 && media > 0) {
  console.log("valor menor ou igual a 20");
}
