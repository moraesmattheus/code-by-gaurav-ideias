/**
 * PROJETO: Formulário Duplo Login & Cadastro com Flip 3D - Lógica JavaScript
 * ORIGEM: CodeByGaurav
 * DATA: 01/11/2026
 * O QUE É: Lógica interativa para o componente.
 * FINALIDADE: Manipulação de eventos, DOM e cálculos dinâmicos.
 */

const registerButton = document.getElementById("register");
const loginButton = document.getElementById("login");
const container = document.getElementById("container");

registerButton.onclick = function (){
    container.className = 'active'
}

loginButton.onclick = function (){
    container.className = 'close'
}