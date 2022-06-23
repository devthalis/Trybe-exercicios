//Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Faça programas para:

const a = 10;
const b = 5;

console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(a%b)

//Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.

const x = 50;
const y = 50;

if(x > y){
    console.log("x é maior que y")
}else if(x === y){
    console.log('Números iguais')
}else{
    console.log('Y é maior que x')
}

//Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.

const q = 100;
const w = 200;
const e = 300;

if(q > w && q > e){
    console.log("Q é o maior número")
}else if(w > q && w > e){
    console.log("w é o maior número")
}else if(e > q && e > w){
    console.log('E é o maior número')
}

//Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

const valor = 0;

if(valor > 0 ){
    console.log("positivo")
}else if(valor < 0){
    console.log("negativo")
}else{
    console.log("zero")
}

//🚀 Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

const angulo1 = 60;
const angulo2 = 60;
const angulo3 = 60;
const total = (angulo1 + angulo2 + angulo3)

if(angulo1 > 0 && angulo2 > 0 && angulo3 > 0){
    if(total === 180){
        console.log(true)
    }else{
        console.log("Angulo invalido")
    }
}else{
    console.log(false)
}

//Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

let chess = "rainha"

switch(chess){
    case "rei":
    console.log("movimenta apenas as casas adjacentes");
    break;

    case "rainha":
    console.log("movimenta todas as casas adjacentes");
    break;

    case "bispo":
    console.log("movimenta apenas casa diagonais");
    break;

    case "cavalo":
    console.log("Movimenta casas em 'L'");
    break;

    case "torre":
    console.log("Movimenta todas as casas apenas em linha reta");
    break;

    case "peao":
    console.log("movimenta apenas para frente");
    break;

    default:
    console.log("peça inválida");
    break;
}

//Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
// Porcentagem >= 90 -> A
// Porcentagem >= 80 -> B
// Porcentagem >= 70 -> C
// Porcentagem >= 60 -> D
// Porcentagem >= 50 -> E
// Porcentagem < 50 -> F
//O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.

let porcentagem = 101;
let conceito = "";

if(porcentagem < 0 || porcentagem > 100){
    conceito = "ERRO"
}else if(porcentagem >= 90){
    conceito = "A"
}else if(porcentagem >= 80){
    conceito = "B"
}else if(porcentagem >= 70){
    conceito = "C"
}else if(porcentagem >= 60){
    conceito = "D"
}else if(porcentagem >= 50){
    conceito = "E"
}else if(porcentagem < 50){
    conceito = "F"
}
console.log(conceito)

// Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false.
// Bonus: use somente um if.

const num1 = 1;
const num2 = 2;
const num3 = 3;

if(num1 % 2 === 0 || num2 % 2 === 0 || num3 % 2 === 0){
    console.log(true)
}

// Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false.
// Bonus: use somente um if.

const num5 = 1;
const num6 = 2;
const num7 = 3;

if(num5 % 1 === 0 || num6 % 1 === 0 || num7 % 1 === 0){
    console.log(true)
}



