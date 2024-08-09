'use strict';

function click_menu() {
    const imenu = document.getElementById("imenu");
    if (imenu.style.display === 'block') {
        imenu.style.display = 'none';
    } else {
        imenu.style.display = 'block';
    };
};

function mudou_tamanho() {
    const imenu = document.getElementById("imenu");
    if (window.innerWidth >= 768) {
        imenu.style.display = 'block';
    } else if (window.innerWidth < 768) {
        imenu.style.display = 'none';
    }
}