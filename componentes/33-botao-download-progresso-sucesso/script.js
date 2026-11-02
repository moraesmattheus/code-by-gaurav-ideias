/**
 * PROJETO: Botão de Download com Progresso - Lógica
 * ORIGEM: CodeByGaurav
 * DATA: 01/11/2026
 * O QUE É: Simulação de carregamento com contagem regressiva e feedback de sucesso.
 * FINALIDADE: Gamificação no clique de download.
 */

const dlBtn = document.getElementById('dlBtn');
const dlProgress = document.getElementById('dlProgress');
const dlText = document.getElementById('dlText');

let downloading = false;

dlBtn.addEventListener('click', () => {
    if (downloading) return;
    downloading = true;

    let percent = 0;
    const interval = setInterval(() => {
        percent += 2;
        dlProgress.style.width = percent + '%';
        dlText.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Baixando... ${percent}%`;

        if (percent >= 100) {
            clearInterval(interval);
            dlBtn.classList.add('complete');
            dlText.innerHTML = '<i class="fa-solid fa-circle-check"></i> Download Concluído!';
            
            setTimeout(() => {
                dlBtn.classList.remove('complete');
                dlProgress.style.width = '0%';
                dlText.innerHTML = '<i class="fa-solid fa-cloud-arrow-down"></i> Baixar Novamente';
                downloading = false;
            }, 4000);
        }
    }, 40);
});