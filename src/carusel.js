const buttonleft = document.getElementById('lf');
const buttonright = document.getElementById('rt');

let list = natmenu.querySelector('ul');
let listElems = natmenu.querySelectorAll('li');

const elem = 3;
const width = 400;

let position = 0;

let i = 1;
    for(let li of natmenu.querySelectorAll('li')) {
      li.style.position = 'relative';
      li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0">${i}</span>`);
      i++;
    }

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
