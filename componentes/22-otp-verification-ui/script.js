/**
 * PROJETO: Verificação OTP - Lógica Interativa
 * ORIGEM: CodeByGaurav
 * DATA: 01/11/2026
 * O QUE É: Gerenciamento inteligente de navegação entre os 6 inputs.
 * FINALIDADE: Avançar automaticamente ao digitar e retornar no backspace.
 */

const boxes = document.querySelectorAll('.otp-box');
const form = document.getElementById('otpForm');
const statusMsg = document.getElementById('statusMsg');
const resendLink = document.getElementById('resendLink');
const timerSpan = document.getElementById('timer');

// 1. Navegação automática entre caixas
boxes.forEach((box, index) => {
    box.addEventListener('input', (e) => {
        const val = e.target.value;
        // Permite apenas dígitos
        if (!/^\d*$/.test(val)) {
            e.target.value = '';
            return;
        }
        if (val.length === 1 && index < boxes.length - 1) {
            boxes[index + 1].focus();
        }
    });

    box.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace' && !box.value && index > 0) {
            boxes[index - 1].focus();
        }
    });

    // Suporte a colar código completo (Ctrl+V)
    box.addEventListener('paste', (e) => {
        e.preventDefault();
        const pasteData = e.clipboardData.getData('text').trim();
        if (/^\d{6}$/.test(pasteData)) {
            pasteData.split('').forEach((char, i) => {
                if (boxes[i]) boxes[i].value = char;
            });
            boxes[boxes.length - 1].focus();
        }
    });
});

// 2. Validação ao submeter
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let code = '';
    boxes.forEach(b => code += b.value);
    
    if (code.length === 6) {
        statusMsg.className = 'status-msg success';
        statusMsg.textContent = 'Código ' + code + ' validado com sucesso! Redirecionando...';
    } else {
        statusMsg.className = 'status-msg error';
        statusMsg.textContent = 'Por favor, preencha todos os 6 dígitos do código.';
    }
});

// 3. Temporizador de Reenvio
let timeLeft = 30;
resendLink.classList.add('disabled');
const countdown = setInterval(() => {
    timeLeft--;
    timerSpan.textContent = timeLeft;
    if (timeLeft <= 0) {
        clearInterval(countdown);
        resendLink.classList.remove('disabled');
        resendLink.innerHTML = 'Reenviar Agora';
    }
}, 1000);