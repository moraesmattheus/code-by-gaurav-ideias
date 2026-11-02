/**
 * PROJETO: Formulário Multi-Etapas - Lógica
 * ORIGEM: CodeByGaurav
 * DATA: 01/11/2026
 * O QUE É: Controle sequencial de visibilidade de etapas e linhas de progresso.
 * FINALIDADE: Guiar o usuário sem sobrecarga cognitiva.
 */

function nextStep(stepNumber) {
    // Esconde todos os passos
    document.querySelectorAll('.form-step').forEach(step => step.classList.remove('active'));
    // Mostra o passo alvo
    document.getElementById(`step${stepNumber}`).classList.add('active');

    // Atualiza indicadores
    document.getElementById('step1-dot').classList.toggle('active', stepNumber >= 1);
    document.getElementById('step2-dot').classList.toggle('active', stepNumber >= 2);
    document.getElementById('step3-dot').classList.toggle('active', stepNumber >= 3);

    document.getElementById('line1').classList.toggle('active', stepNumber >= 2);
    document.getElementById('line2').classList.toggle('active', stepNumber >= 3);
}