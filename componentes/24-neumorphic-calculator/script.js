/**
 * PROJETO: Calculadora Neumórfica - Lógica Matemática
 * ORIGEM: CodeByGaurav
 * DATA: 01/11/2026
 * O QUE É: Avaliação de expressões aritméticas com tratamento seguro de erros.
 * FINALIDADE: Cálculos rápidos e interativos.
 */

const result = document.getElementById('result');

function appendNum(num) {
    if (result.value === '0') result.value = '';
    result.value += num;
}

function appendOp(op) {
    const lastChar = result.value.slice(-1);
    if (['+', '-', '*', '/', '%'].includes(lastChar)) {
        result.value = result.value.slice(0, -1) + op;
    } else if (result.value !== '') {
        result.value += op;
    }
}

function clearDisplay() {
    result.value = '';
}

function deleteChar() {
    result.value = result.value.slice(0, -1);
}

function calculate() {
    try {
        if (!result.value) return;
        // Avaliação segura da expressão
        const formatted = result.value.replace(/%/g, '/100');
        const calculated = Function('"use strict";return (' + formatted + ')')();
        result.value = Number(calculated.toFixed(6)).toString();
    } catch (e) {
        result.value = 'Erro';
        setTimeout(() => { result.value = ''; }, 1200);
    }
}