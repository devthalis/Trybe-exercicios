// const testingScope = (escopo) => {
//   if (escopo === true) {
//     let ifScope = "Não devo ser utilizada fora do meu escopo (if)";
//     ifScope = ifScope + " ótimo, fui utilizada no escopo !";
//     console.log(ifScope);
//   } else {
//     let elseScope = "Não devo ser utilizada fora meu escopo (else)";
//     console.log(elseScope);
//   }
  
// };

// testingScope(false);

// const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.

// const eventSort = (a,b) =>  a - b

// console.log(`Os números ${oddsAndEvens.sort(eventSort)} se encontram ordenados em ordem crescente`);

 // será necessário alterar essa linha 😉

//  Abaixo, você verá algumas especificações de algoritmos para desenvolver. É fundamental que você utilize o que aprendeu sobre let, const, arrow functions, template literals e ternary operator.
//  Crie uma função que receba um número e retorne seu fatorial.
//  Na matemática, o fatorial de um número inteiro e positivo N, representado por N!, é o produto de todos os seus antecessores até o número um. Exemplo: 4! = 4 * 3 * 2 * 1 = 24.
 
 
// const fatorial = (num) => {
//     let resultado = 1;
//     for(let index = 1; index <= num; index += 1){
//         resultado = resultado * index
//     }
//     return resultado
// }

// console.log(fatorial(10));

// 2. Crie uma função que receba uma frase e retorne a maior palavra.
// Exemplo:
// Copiar
//       longestWord('Antônio foi no banheiro e não sabemos o que aconteceu') // retorna 'aconteceu'

// const maiorPalavra = (palavra) => {
//     first = palavra.split(' ');
//     result = '';

//     for(let word in first){
//         if(first[word].length > result.length)
//             result = first[word] 
//     }
//     return result
// }

// console.log(maiorPalavra('Antônio foi no banheiro e não sabemos o que aconteceu'));

// 3.🚀 Crie uma página com um contador de cliques
// Sua página deve conter:
// Um botão ao qual será associado um event listener;
// Uma variável clickCount no arquivo JavaScript que acumule o número de clicks no botão;
// Um campo no HTML que vá atualizando a quantidade de clicks no botão conforme a variável clickCount é atualizada.


