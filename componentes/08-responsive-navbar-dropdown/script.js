/**
 * PROJETO: Navbar Responsiva Completa com Dropdown e Mobile - Lógica JavaScript
 * ORIGEM: CodeByGaurav
 * DATA: 01/11/2026
 * O QUE É: Lógica interativa para o componente.
 * FINALIDADE: Manipulação de eventos, DOM e cálculos dinâmicos.
 */

const toggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

toggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});