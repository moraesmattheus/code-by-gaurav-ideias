/**
 * PROJETO: Card 3D Tilt com Spotlight - Lógica Matemática
 * ORIGEM: Novos Estilos UI
 * DATA: 01/11/2026
 * O QUE É: Cálculo de coordenadas relativas do mouse para girar o card em 3D.
 * FINALIDADE: Transições realistas de física e reflexo dinâmico de luz.
 */

const card = document.getElementById('tiltCard');

card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Atualiza posição do reflexo de luz
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);

    // Calcula inclinação (max 15 graus)
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -12;
    const rotateY = ((x - centerX) / centerX) * 12;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

card.addEventListener('mouseleave', () => {
    card.style.transform = 'rotateX(0deg) rotateY(0deg)';
});