const buttonleft = document.getElementById('lf');
const buttonright = document.getElementById('rt');

let list = natmenu.querySelector('ul');
let listElems = natmenu.querySelectorAll('li');

const elem = 3;
const width = 410;

let position = 0;

buttonleft.addEventListener("click", () => {
    position += width * elem;
    position = Math.min(position, 0);
    list.style.marginLeft = position + 'px';
})

buttonright.addEventListener("click", () => {
    position -= width * elem;
    position = Math.max(position, -width * (listElems.length - elem));
    list.style.marginLeft = position + 'px';
})
