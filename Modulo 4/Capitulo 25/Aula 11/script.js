'use strict';

function click_menu() {
    const imenu = document.getElementById("imenu");
    if (imenu.style.display === 'block') {
        imenu.style.display = 'none';
    } else {
        imenu.style.display = 'block';
    };
};