// // =========================
// // INTRODUÇÃO AO JAVASCRIPT
// // =========================


// console.log("Olá Mundo");
// alert("Bem-vindo ao site MartinsVet!");
 let nomeUsuario = prompt("Qual é o seu nome?");
// console.log("Nome digitado:" , nomeUsuario);
let mensagem = "Olá, " + nomeUsuario + "! Bem-vindo ao nosso site!";
// alert(mensagem);
let titulo = document.querySelector(".hero h2");
titulo.innerText = mensagem;
// document.body.style.background = "red";
let botao = document.getElementById("chat-toggle");
console.log("Botão do chat:", botao);
botao.style.background = "red";
let listaServicos = document.getElementsByClassName("servico");
console.log("Lista de servicos:", listaServicos);
