/**
 * PROJETO: Menu com Indicador Fluido Brilhante (Glow) - Lógica JavaScript
 * ORIGEM: CodeByGaurav
 * DATA: 01/11/2026
 * O QUE É: Lógica interativa para o componente.
 * FINALIDADE: Manipulação de eventos, DOM e cálculos dinâmicos.
 */

const list = document.querySelectorAll(".list")
const nav = document.querySelector(".navigation");

list.forEach(item => item.addEventListener("click", function(e){

    list.forEach(li => li.classList.remove("active"));
    e.currentTarget.classList.add("active");

}))