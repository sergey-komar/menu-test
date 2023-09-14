window.addEventListener('DOMContentLoaded', () => {

    
// Калькулятор
// const size = document.querySelector('#size');
// const material = document.querySelector('#material');
// const options = document.querySelector('#options');
// const promocode = document.querySelector('.promocode');
// const calcPrice = document.querySelector('.calc-price');

// let sum = 0;

// function calcSum() {
//     sum = Math.round((+size.value) * (+material.value) + (+options.value));

//     if(size.value == '' || material.value == ''){
//         calcPrice.textContent = 'Выберите пожалуйста размер и материал'
//     }else if(promocode.value == 'Sergey'){
//         calcPrice.textContent = Math.round(sum * 0.7);
//     }else {
//         calcPrice.textContent = sum;
//     }
// }
// size.addEventListener('change', calcSum);
// material.addEventListener('change', calcSum);
// options.addEventListener('change', calcSum);
// promocode.addEventListener('input', calcSum);



//Показать больше

    const btn = document.querySelector('.button-styles');
    const cards = document.querySelectorAll('.hide-styles');

function showMoreStyles() {
    cards.forEach(card => {
        card.classList.add('animated', 'fadeInUp')
    });

    btn.addEventListener('click', ()=>{
        cards.forEach(card => {
        card.classList.remove('hide');
        card.classList.add('show');
        });

        btn.style.display = 'none';
    });
}
showMoreStyles();




const sizesBlock = document.querySelectorAll('.sizes-block');

function sizeShow(block){
    const img = block.querySelector('img');
    img.src = img.src.slice(0, -4) + '-1.png';
    block.querySelectorAll('.sizes-block p:not(.sizes-hit)').forEach(p => {
        p.style.display = 'none'
    })
}

function sizeHide(block){
    const img = block.querySelector('img');
    img.src = img.src.slice(0, -6) + '.png';
    block.querySelectorAll('.sizes-block p').forEach(p => {
        p.style.display = 'block'
    })
}



sizesBlock.forEach(item => {
    item.addEventListener('mouseover', () => {
        sizeShow(item)
    })
    item.addEventListener('mouseout', () => {
        sizeHide(item)
    })
})



const btnUp = document.querySelector('.btnUp');
btn.addEventListener('click', ()=>{
  window.scrollTo({
    top: 0, 
    behavior: 'smooth' 

  });
});
function up() {
  window.addEventListener('scroll', () => {
    if(window.scrollY + document.documentElement.clientHeight >= document.documentElement.scrollHeight){
      btnUp.classList.add('btnUp-visible');
    }else{
      btnUp.classList.remove('btnUp-visible');
    }
  })
}
up();



});