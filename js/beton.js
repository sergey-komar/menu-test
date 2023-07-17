window.addEventListener('DOMContentLoaded', () => {


const label = document.querySelectorAll('.calculator__label');
const calculatorRightImg = document.querySelectorAll('.calculator__right-img');
const boxinput = document.querySelectorAll('.calculator__box-input');
const calc = document.querySelector('#cacl');
const sbros = document.querySelector('.calc__sbros');
const result = document.querySelector('.calc__price');

let shirina, dlina, visota, tolshina, ratio = 1 ;



function calcHide() {
    calculatorRightImg.forEach(item => {
        item.classList.add('hide');
        item.classList.remove('show')
    });
}

function calcShow(i) {
    calculatorRightImg[i].classList.add('show');
    calculatorRightImg[i].classList.remove('hide');
}
calcHide();
calcShow(0);

label.forEach((item, i) => {
    item.addEventListener('click', () => {
        calcHide();
        calcShow(i);
    });
});

function calcTotal() {
    if(!shirina || !dlina || !visota || !tolshina || !boxinput){
        result.textContent = 'Рассчитать';
        return;
    }

   
        result.textContent = Math.round((+calc.value) * ((+shirina) + (+dlina) + (+visota) + (+tolshina)) * ratio);
}
calcTotal();

function caclValue() {
    if(+calc.value){
        calcTotal()
    }
}
calc.addEventListener('input', caclValue);


boxinput.forEach(item => {
    item.addEventListener('input', (e) => {
        if(e.target.getAttribute('data-ratio')){
            ratio = e.target.getAttribute('data-ratio');
        }
        calcTotal();
    })
})



function getDynamicInformation(selector) {
    const input = document.querySelector(selector);
        input.addEventListener('input', () => {
            switch(input.getAttribute('id')){
                case 'shirina':
                    shirina = +input.value;
                    break;
                case 'dlina':
                     dlina = +input.value;
                    break;
                case 'visota':
                    visota = +input.value;
                    break;
                case 'tolshina':
                    tolshina = +input.value;
                    break;
            }
            calcTotal()
        })
        sbros.addEventListener('click', () => {
            result.textContent = 'Рассчитать';
            input.value = '';
        })
}
getDynamicInformation('#shirina');
getDynamicInformation('#dlina');
getDynamicInformation('#visota');
getDynamicInformation('#tolshina');






});