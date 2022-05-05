const colorSwitchButton = document.getElementById(`colorswitch`);

const mainFormColor = document.getElementById(`indblock`);
const infoBlock = document.getElementById(`infoblock`);

const stylesafe = [`index.css`, `indexDark.css`, `infoblock.css`, `infoblockDark.css`];
let count = 0;
colorSwitchButton.addEventListener("click", () => {
    switch(count) {
        case 0:
            mainFormColor.href = stylesafe[1];
            infoBlock.href = stylesafe[3];
            count++;
            break;
        case 1:
            mainFormColor.href = stylesafe[0];
            infoBlock.href = stylesafe[2];

            count--;
            break;
    }
})