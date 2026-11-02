/**
 * PROJETO: Seletor de Planos Mensal/Anual - Lógica Interativa
 * ORIGEM: Novos Estilos UI
 * DATA: 01/11/2026
 * O QUE É: Transição suave entre valores com animação numérica.
 * FINALIDADE: Atualizar os valores na tela conforme escolha do ciclo.
 */

const toggleBtn = document.getElementById('togglePricing');
const labelMonthly = document.getElementById('labelMonthly');
const labelYearly = document.getElementById('labelYearly');
const amounts = document.querySelectorAll('.amount');

let isYearly = true; // Padrão anual ativo

toggleBtn.addEventListener('click', () => {
    isYearly = !isYearly;
    
    if (isYearly) {
        toggleBtn.classList.remove('monthly');
        labelYearly.classList.add('active');
        labelMonthly.classList.remove('active');
    } else {
        toggleBtn.classList.add('monthly');
        labelMonthly.classList.add('active');
        labelYearly.classList.remove('active');
    }

    amounts.forEach(el => {
        const targetVal = isYearly ? el.dataset.yearly : el.dataset.monthly;
        el.style.opacity = '0';
        setTimeout(() => {
            el.textContent = targetVal;
            el.style.opacity = '1';
        }, 150);
    });
});