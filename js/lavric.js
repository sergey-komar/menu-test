window.addEventListener('DOMContentLoaded',()=>{

const some = document.querySelector('.some');
const other = document.querySelector('.other');
const button = document.querySelector('.button');
const colors = ['#f90', '#f00', '#0f0'];

// some.addEventListener('click', function(){
//     let num = Math.floor(Math.random() * colors.length);
//     some.style.backgroundColor = colors[num];
// });

// other.addEventListener('click', function(){
//     let num = Math.floor(Math.random() * colors.length);
//     other.style.backgroundColor = colors[num];
// });

// some.addEventListener('click', setColor);
// other.addEventListener('click', setColor);

// button.addEventListener('click', function(){
//     colors.push('#ff0'); //push Добавление в массив
// })
// РАЗДЕЛЕНИЕ РАЗДЕЛЕНИЕ РАЗДЕЛЕНИЕ РАЗДЕЛЕНИЕ РАЗДЕЛЕНИЕ РАЗДЕЛЕНИЕ


// КРАСИМ БЛОКИ В РАНДОМНЫЙ ЦВЕТ КРАСИМ БЛОКИ В РАНДОМНЫЙ ЦВЕТ КРАСИМ БЛОКИ В РАНДОМНЫЙ ЦВЕТ
// let items = document.querySelectorAll('.number__item');
//     items.forEach(item =>{
//         item.addEventListener('click', setColor); 
//     })

//     function setColor(){
//         const colors = ['#f90', '#f00', '#0f0'];
//         let num = Math.floor(Math.random() * colors.length);
//         this.style.backgroundColor = colors[num];
//     }
// КРАСИМ БЛОКИ В РАНДОМНЫЙ ЦВЕТ КРАСИМ БЛОКИ В РАНДОМНЫЙ ЦВЕТ КРАСИМ БЛОКИ В РАНДОМНЫЙ ЦВЕТ


//КРАСИМ БЛОКИ В ОПРЕДЕЛЁННЫЕ ЦВЕТА
// let items = document.querySelectorAll('.number__item');
//     items.forEach(item =>{
//         item.addEventListener('click', setColor); 
//     });
// function setColor(){
//     // let color = this.getAttribute('data-color');
//     // let color = this.dataset.color;
//     this.style.backgroundColor = this.dataset.color;
// }
//КРАСИМ БЛОКИ В ОПРЕДЕЛЁННЫЕ ЦВЕТА


// КРАСИМ БЛОКИ В ОПРЕДЕЛЁННЫЕ ЦВЕТА при повторном клике убираем этот цвет
function setColor(){
    let num = Math.floor(Math.random() * colors.length);
    this.style.backgroundColor = colors[num];
}

let items = document.querySelectorAll('.number__item');
    items.forEach(item =>{
        item.addEventListener('click', setColor); 
    });
    function setColor(){
        if(this.classList.contains('active')){
            this.style.backgroundColor = 'inherit';
            this.classList.remove('active');
        }else{
            this.style.backgroundColor = this.dataset.color;
            this.classList.add('active');
        }
    }
// КРАСИМ БЛОКИ В ОПРЕДЕЛЁННЫЕ ЦВЕТА при повторном клике убираем этот цвет 



// Математические операции
    let inp1 = document.querySelector('.inp1');
	let inp2 = document.querySelector('.inp2');
	let btn = document.querySelector('.go');
    const oper = document.querySelector('.operation');
	let resBox = document.querySelector('.res');

	btn.addEventListener('click', function(){
        let num1 = parseInt(inp1.value);
        let num2 = parseInt(inp2.value);
        let res;

        switch(oper.value){
            case 'sum':
            res = num1 + num2;
            break;
            case 'sub':
            res = num1 - num2;
            break;
            case 'mult':
            res = num1 * num2;
            break;
            case 'div':
            res = num1 / num2;
            break;
        }

        if(isNaN(res)){
             res ='Введите корректные числа'
        }
        resBox.innerHTML = res;
		btn.disabled = true;
	});
    // inp1.addEventListener('input', btnEnable);
    // inp2.addEventListener('input', btnEnable);
    // oper.addEventListener('input', btnEnable);

   
    function cleanInput(){
        this.value = this.value.replase(/\D/g, '');
    }
    inp1.addEventListener('input', cleanInput);
    inp2.addEventListener('input', cleanInput);

    function btnEnable(){
        btn.disabled = false;
    }
    [inp1, inp2, oper].forEach(el=>{
        el.addEventListener('input', btnEnable);
    })

    
});