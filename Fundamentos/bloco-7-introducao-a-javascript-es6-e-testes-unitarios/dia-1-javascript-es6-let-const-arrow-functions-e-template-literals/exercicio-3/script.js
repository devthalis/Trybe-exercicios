// 🚀 Crie uma página com um contador de cliques
// Sua página deve conter:
// Um botão ao qual será associado um event listener;
// Uma variável clickCount no arquivo JavaScript que acumule o número de clicks no botão;
// Um campo no HTML que vá atualizando a quantidade de clicks no botão conforme a variável clickCount é atualizada.

const button = document.getElementById('button');
const odin = document.getElementById('odin');
const criarClick = document.createElement('p')
let clickCount = 0
odin.appendChild(criarClick)

const clicado = () =>{
    clickCount+=1
    criarClick.innerText = clickCount

}  

button.addEventListener('click', clicado)
