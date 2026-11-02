/**
 * PROJETO: Campo de Senha com Olho - Lógica JavaScript
 * ORIGEM: CodeByGaurav
 * DATA: 01/11/2026
 * O QUE É: Alterna o atributo type do input entre 'password' e 'text'.
 * FINALIDADE: Permitir ao usuário auditar a senha digitada antes do envio.
 */

const passwordInput = document.getElementById('passwordInput');
const toggleEye = document.getElementById('toggleEye');
const eyeIcon = document.getElementById('eyeIcon');

toggleEye.addEventListener('click', () => {
    const isPassword = passwordInput.getAttribute('type') === 'password';
    
    if (isPassword) {
        passwordInput.setAttribute('type', 'text');
        eyeIcon.classList.remove('fa-eye-slash');
        eyeIcon.classList.add('fa-eye');
        eyeIcon.style.color = '#38bdf8';
    } else {
        passwordInput.setAttribute('type', 'password');
        eyeIcon.classList.remove('fa-eye');
        eyeIcon.classList.add('fa-eye-slash');
        eyeIcon.style.color = '#94a3b8';
    }
});