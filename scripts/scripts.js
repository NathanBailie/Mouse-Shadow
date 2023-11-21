"use strict"

const wrapper = document.querySelector('.wrapper');
const text = document.querySelector('.title');
const walk = 500;

function moveShadows(e) {
    const { offsetWidth: width, offsetHeight: height } = wrapper;
    let { offsetX: x, offsetY: y } = e;

    if (this !== e.target) {
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }

    const xWalk = Math.round((x / width * walk) - (walk / 2));
    const yWalk = Math.round((y / height * walk) - (walk / 2));

    text.style.textShadow = `
    ${xWalk}px ${yWalk}px 0 rgb(255 201 255 / 70%),
    ${xWalk * -1}px ${yWalk}px 0 rgb(247 255 131 / 70%),
    ${yWalk}px ${xWalk * -1}px 0 rgb(0 227 0 / 70%),
    ${yWalk * -1}px ${xWalk}px 0 rgb(106 115 223 / 70%)
  `;
}

wrapper.addEventListener('mousemove', moveShadows);
