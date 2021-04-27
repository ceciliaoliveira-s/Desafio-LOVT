// console.log('Console log funcionou!!');
// console.log (window);

// alert('seje bem vinde!'); // Mensagem para usuário 

// let adulto = confirm("Você tem mais de 18 anos?"); // Retorna booleano 

let nomeUsuario = prompt('Qual o nome?'); // Retorna texto inserido pelo usuário

console.log(nomeUsuario);

let elementHeader = document.querySelector('.olaUsuario'); // Seleciona o elemento html

let elementHeader.innerText = `Olá, ${nomeUsuario}`; // atribui conteudo ao elemento selecionado

elementHeader.innerHTML += `<strong> Olá, ${nomeUsuario}</strong>`;

let logo = document.getElementById('logo');
console.log(logo);

logo.style.color = "orange";


const toggleMode = () => {
    document.body.classList.toggle("Dark-mode");
}

setTimeout(()  =>  {
   document.querySelector('.modal').style.display = "flex";

}, 5000)

const btnClose = () => {
    document.querySelector('.modal').style.display = "none";

}

document.querySelector("#btn-submit-contact").addEventListener("click", (evento) => {
    evento.preventDefault(); // Cancelando o envio temporariamente.
})


let nomeValue = document.querySelector("#input_nome").value;
let emailValue = document.querySelector("#input_email").value;

console.log(nomeValue);
console.log(emailValue);
// Validação dos campos


let formContact = document.querySelector("#form_contact")

formContact.addEventListener("submit", (evento) =>{
    // Interrompo o envio do formulário
    evento.preventDefault();

    // Validar se todos os campos estão preenchidos
    // Validar se o nome tem 2 ou mais caracteres
    // Validar se telefone tem no mínimo 8 caracteres 
    // Validar se o campo email tem @ (google - regex)

}); 