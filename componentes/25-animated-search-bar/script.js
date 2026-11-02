/**
 * PROJETO: Barra de Busca Animada - Lógica Interativa
 * ORIGEM: CodeByGaurav
 * DATA: 01/11/2026
 * O QUE É: Expansão dinâmica no clique e preenchimento por tags.
 * FINALIDADE: Usabilidade ágil para busca em sites e blogs.
 */

const searchBox = document.getElementById('searchBox');
const searchBtn = document.getElementById('searchBtn');
const searchInput = document.getElementById('searchInput');
const clearBtn = document.getElementById('clearBtn');
const tags = document.querySelectorAll('.tag');

searchBtn.addEventListener('click', () => {
    if (!searchBox.classList.contains('active')) {
        searchBox.classList.add('active');
        searchInput.focus();
    } else if (searchInput.value.trim() !== '') {
        alert('Buscando por: ' + searchInput.value);
    }
});

searchInput.addEventListener('input', () => {
    if (searchInput.value.length > 0) {
        clearBtn.style.display = 'flex';
    } else {
        clearBtn.style.display = 'none';
    }
});

clearBtn.addEventListener('click', () => {
    searchInput.value = '';
    clearBtn.style.display = 'none';
    searchInput.focus();
});

// Fechar barra ao clicar fora se estiver vazia
document.addEventListener('click', (e) => {
    if (!searchBox.contains(e.target) && searchInput.value === '') {
        searchBox.classList.remove('active');
        clearBtn.style.display = 'none';
    }
});

// Preencher campo ao clicar nas tags de sugestão
tags.forEach(tag => {
    tag.addEventListener('click', () => {
        searchBox.classList.add('active');
        searchInput.value = tag.textContent;
        clearBtn.style.display = 'flex';
        searchInput.focus();
    });
});