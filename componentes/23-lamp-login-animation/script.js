/**
 * PROJETO: Login com Lâmpada - Interatividade
 * ORIGEM: CodeByGaurav
 * DATA: 01/11/2026
 * O QUE É: Alternância de classes ao clicar no cordão com efeito sonoro visual.
 * FINALIDADE: Ligar e desligar a iluminação do formulário de login.
 */

const pullChain = document.getElementById('pullChain');
const scene = document.getElementById('scene');
const bulb = document.getElementById('bulb');

pullChain.addEventListener('click', () => {
    // Alterna entre modo escuro e claro
    if (scene.classList.contains('dark-mode')) {
        scene.classList.remove('dark-mode');
        scene.classList.add('light-mode');
    } else {
        scene.classList.remove('light-mode');
        scene.classList.add('dark-mode');
    }
});