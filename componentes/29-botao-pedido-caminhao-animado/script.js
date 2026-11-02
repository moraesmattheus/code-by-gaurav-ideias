/**
 * PROJETO: Botão de Pedido com Caminhão - Lógica
 * ORIGEM: CodeByGaurav
 * DATA: 01/11/2026
 * O QUE É: Disparo sincronizado da animação do caminhão ao clicar.
 * FINALIDADE: Gamificação no checkout e prevenção de duplo clique.
 */

const orderBtn = document.getElementById('orderBtn');

orderBtn.addEventListener('click', () => {
    if (orderBtn.classList.contains('animate')) return;

    orderBtn.classList.add('animate');

    // Após o caminhão atravessar a tela
    setTimeout(() => {
        orderBtn.classList.add('done');
    }, 2500);

    // Reset opcional após 5 segundos
    setTimeout(() => {
        orderBtn.classList.remove('animate', 'done');
    }, 5500);
});