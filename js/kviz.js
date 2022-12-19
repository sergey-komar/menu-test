window.addEventListener('DOMContentLoaded', () => {

const overlay = document.querySelector('.overlay');
const quiz = document.querySelector('.quiz');
const passTestButton = document.querySelector('.pass-test__button');
const form = document.querySelector('.quiz-body__form');
const formItems = form.querySelectorAll('fieldset');
const btnsNext = form.querySelectorAll('.form-button__btn-next');
const btnsPrev = form.querySelectorAll('.form-button__btn-prev');
const answersObj = {
    step0 : {
        question: '',
        answers: [],
    },
    step1 : {
        question: '',
        answers: [],
    },
    step2 : {
        question: '',
        answers: [],
    },
    step3 : {
        question: '',
        answers: [],
    },
    step4: {
        name: '',
        phone: '',
        email: '',
        call: '',
    }
}

btnsNext.forEach((btn, btnIndex)=>{
    btn.addEventListener('click',(e)=>{
        e.preventDefault();
        formItems[btnIndex].style.display = 'none';
        formItems[btnIndex + 1].style.display = 'block';
       
    });

    btn.disabled = true;
});

btnsPrev.forEach((btn, btnIndex)=>{
    btn.addEventListener('click',(e)=>{
        e.preventDefault();
        formItems[btnIndex + 1].style.display = 'none';
        formItems[btnIndex].style.display = 'block';
    })
})


formItems.forEach((formItem, formItemIndex)=>{
    if(formItemIndex === 0){
        formItem.style.display = 'block';
    }else{
        formItem.style.display = 'none';
    }

    if(formItemIndex !== formItem.length -1){
        const inputs = formItem.querySelectorAll('input');
        const itemTitle = document.querySelector('.form__title');

        answersObj[`step${formItemIndex}`].question = itemTitle.textContent;

        inputs.forEach((input) =>{
            const parent = input.parentNode; //parentNode Получает родительский элемент
           input.checked = false;
           parent.classList.remove('active-radio');
           parent.classList.remove('active-checkbox');
           
        })
    }
// ВЫБОР РАДИО И ЧЕКБОКС
formItem.addEventListener('change', (e)=>{
    const target = e.target;
    const inputCheked = formItem.querySelectorAll('input:checked');

    answersObj[`step${formItemIndex}`].answers.length = 0;
    inputCheked.forEach((inputCheked,)=>{
        answersObj[`step${formItemIndex}`].answers.push(inputCheked.value);
    })

    if(inputCheked.length > 0){
        // разблокировать именно эту кнопку
        btnsNext[formItemIndex].disabled = false;
    }else{
        btnsNext[formItemIndex].disabled = true;
    }
    if(target.classList.contains('form__radio')){
        const radios = formItem.querySelectorAll('.form__radio');
        radios.forEach(input=>{
            if(input === target){
                input.parentNode.classList.add('active-radio');
            }else{
                input.parentNode.classList.remove('active-radio');
            }
        })
    }else if(target.classList.contains('form__input')){
        target.parentNode.classList.toggle('active-checkbox');
    }else{
        return;
    }
})
});


overlay.style.display = 'none';
quiz.style.display = 'none';

passTestButton.addEventListener('click',()=>{
    overlay.style.display = 'block';
    quiz.style.display = 'block';
})

})