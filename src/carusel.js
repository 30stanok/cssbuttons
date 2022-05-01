const mKey = window.matchMedia('(max-width: 1400px)');


const buttonleft = document.getElementById('lf');
const buttonright = document.getElementById('rt');

let list = natmenu.querySelector('ul');
let listElems = natmenu.querySelectorAll('li');

const width = 410;

let position = 0;

const ScrollGenerate = () =>{
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
}

buttonright.addEventListener("click", () => {
    position -= width * elem;
    position = Math.max(position, -width * (listElems.length - elem));
    list.style.marginLeft = position + 'px';
})

setInterval(() => {
    if (window.matchMedia('(max-width: 1400px)').matches == false) {
        elem = 3;
        console.log(elem);
    } else if (window.matchMedia('(max-width: 1000px)').matches == false) {
        elem = 2;
        console.log(elem);
    } else {
        elem = 1;
        console.log(elem);
    }
}, 0);

console.log(mKey);

