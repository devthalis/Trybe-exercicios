let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();
console.log(numbers)
//Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

// for(let i = 0; i < numbers.length; i += 1){
//     soma += numbers[i] 
// }
// console.log(soma)

//Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
let media = 0
let soma = 0

for(let i = 0; i < numbers.length; i+= 1){
    soma += numbers[i]
    
}

media = soma / numbers.length
console.log(media)

//Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";


for(let i = 0; i < numbers.length; i += 1){
     soma += numbers[i]
     media = soma / numbers.length

     if(soma > 20){
        console.log("maior que 20");
        break
     }else{
        console.log("menor que 20");
        break
     }
}
  
console.log(soma)
console.log(media)

console.log("-----------------------");

//Utilizando for, descubra qual o maior valor contido no array e imprima-o;

let maior = 0

for(let numx = 0; numx < numbers.length ; numx += 1){
   
   let numeros = numbers[numx]

   if(numeros > maior){
      maior = numeros
   }
   
}
console.log(maior)

console.log("-----------------------");
//Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let impares = 0

for(let correr = 0; correr < numbers.length; correr += 1){

   impares = numbers[correr]

   if(impares % 2 == 1){
      console.log(impares)
   }
}

console.log("-----------------------");

//Utilizando for, descubra qual o menor valor contido no array e imprima-o;


let menorValor = 1000;
for(let numx = 0; numx < numbers.length; numx += 1){

   let valor = numbers[numx]
   
   if(valor < menorValor){
      menorValor = valor
   }
   
}
console.log(menorValor);

console.log("-----------------------");

// Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;

let array = []

for(let aleatorio = 1; aleatorio <= 25; aleatorio += 1){
   // array = aleatorio
   array = aleatorio

// console.log(array);
   console.log(array);

   let divisao = (array / 2)
   console.log(divisao);
}

console.log("-----------------------");



