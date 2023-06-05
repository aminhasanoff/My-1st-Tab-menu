"use strict"

const btns = document.querySelectorAll('.my-btn');
const allP = document.querySelectorAll('.buttons');

for (let i = 0; i < btns.length; i++) {
    btns[i].onclick = function () {
        for (let j = 0; j < allP.length; j++) {
            allP[j].classList.remove('active')
        }
        allP[i].classList.add('active')
    }
}