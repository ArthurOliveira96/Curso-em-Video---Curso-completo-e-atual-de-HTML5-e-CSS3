'use strict';

function calcsoma() {
    const n1 = document.getElementById("in1");
    const n2 = document.getElementById("in2");
    const isoma = document.getElementById("isoma");
    isoma.innerHTML = Number(n1.value) + Number(n2.value);
    console.log("oi");
};

const showrange = function(){
    const ival = document.getElementById("ival");
    const inum = document.getElementById("inum");
    ival.innerHTML = inum.value
}

const calcidade = function(){
    const hoje = new Date().getFullYear();
    const iano = document.getElementById("iano");
    const iidade = document.getElementById("iidade");
    iidade.innerHTML = hoje - iano.value;
}
