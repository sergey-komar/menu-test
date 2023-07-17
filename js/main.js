window.addEventListener('DOMContentLoaded', () => {

const menu = document.querySelector('.menu');
const mobile = document.querySelector('.nav-icon');

mobile.addEventListener('click', function(){
    this.classList.toggle('nav-icon--active');
    menu.classList.toggle('nav--active');


// Находим ссылки внутри мобильной навигации
// const navLinks = document.querySelectorAll('.menu__list a');

// Обходим ссылки методом forEach
// navLinks.forEach(function (item) {
  // Для каждой ссылки добавляем прослушку по событию "Клик"
//   item.addEventListener('click', function () {
//     mobile.classList.remove('nav-icon--active'); // Убираем активный класс у иконки моб. навигации
//     menu.classList.remove('nav--active'); // Убираем активный класс у блока моб. навигации
  })




// const tabsItem = document.querySelector('.tabs__item');
// const tabsItemBtn = document.querySelectorAll('.tabs__item-btn');
// const tabsContent = document.querySelectorAll('.tabs__content');

// function tabsHide(){
//     tabsContent.forEach(item => {
//         item.classList.add('hide');
//         item.classList.remove('show');
//     });

//     tabsItemBtn.forEach(btn =>{
//         btn.classList.remove('active');
//     })
// }
// function tabsShow(i){
//     tabsContent[i].classList.add('show');
//     tabsContent[i].classList.remove('hide');
//     tabsItemBtn[i].classList.add('active');
// }

// tabsItem.addEventListener('click', (e)=>{
//     const target = e.target;
    
//     if(target && target.classList.contains('tabs__item-btn')){
//         tabsItemBtn.forEach((item, i)=>{
//             if(target == item){
//                 tabsHide();
//                 tabsShow(i);
//             }
           
//         })
       
//     }
// })

// tabsHide();
// tabsShow(0);




// const modalBtn = document.querySelectorAll('[data-modal]');
// const modal = document.querySelector('.modal');
// const modalCloseBtn = document.querySelector('[data-close]');
// const scroll = calcScroll();


//     modalBtn.forEach(btn =>{
//         btn.addEventListener('click', ()=>{
//             modal.classList.add('show');
//             modal.classList.remove('hide');
//             document.body.style.overflow = 'hidden';
//             document.body.style.marginRight = `${scroll}px`;
//         })
//     });

    // modalCloseBtn.addEventListener('click', ()=>{
    //         modal.classList.add('hide');
    //         modal.classList.remove('show');
    //         document.body.style.overflow = '';
    //         document.body.style.marginRight = `0px`;
    // });

    // modal.addEventListener('click', (e)=>{
    //     if(e.target == modal){
    //         modal.classList.add('hide');
    //         modal.classList.remove('show');
    //         document.body.style.overflow = '';
    //         document.body.style.marginRight = `0px`;
    //     }
    // });

    // document.addEventListener('keydown', (e)=>{
    //     if(e.code == 'Escape' && modal.classList.contains('show')){
    //         modal.classList.add('hide');
    //         modal.classList.remove('show');
    //         document.body.style.overflow = '';
    //         document.body.style.marginRight = `0px`;
    //     }
    // })

// // //УБИРАЕМ ДЁРГАНИЕ МОДАЛЬНОГО ОКНА ПРИ ПОЯВЛЕНИИ
// function calcScroll(){
//     let div = document.createElement('div');
//     div.style.width = '50px';
//     div.style.height = '50px';
//     div.style.overflow = 'scroll';
//     div.style.visibility = 'hidden';
    
//     document.body.append(div);
//     let scrollWidth = div.offsetWidth - div.clientWidth;
//     div.remove();
    
//     return scrollWidth;
//     }
//     //УБИРАЕМ ДЁРГАНИЕ МОДАЛЬНОГО ОКНА ПРИ ПОЯВЛЕНИИ


//     //Показываем модальное окно как только долистаем до конца страницы
//     function openByScroll(){
//         window.addEventListener('scroll', ()=>{
//             if(window.scrollY + document.documentElement.clientHeight >=
//                 document.documentElement.scrollHeight){
//                     modal.classList.add('show');
//                 }
//         });
//     }
//     openByScroll();
//     //pageYOffset - сколько пикселей уже отлистал пользователь сверху(верхний отступ)
//     //document.documentElement.clientHeight- тот контент который сейчас виден пользователю
//     //document.documentElement.scrollHeight - измерение высоты контента в элементе, включая содержимое, невидимое из-за прокрутки. (полная высота страницы)
  
// //ПОЯВЛЕНИЕ МОДАЛЬНОГО ОКНА ЧЕРЕЗ ОПРЕДЕЛЁННЫЙ ПРОМЕЖУТОК ВРЕМЕНИ
// function showModalByTime(){
//     setTimeout(function(){
//        modal.classList.add('show');
//         document.body.style.overflow = 'hidden';
//         document.body.style.marginRight = `0px`;
//     }, 3000);
// }
//  showModalByTime();






// images//
// const imgPopup = document.createElement('div');
// const workSection = document.querySelector('.works');
// const bigImg = document.createElement('img');

// function images() {
//     imgPopup.classList.add('popup');
//     workSection.append(imgPopup);

//     imgPopup.style.justifyContent = 'center';
//     imgPopup.style.alignItems = 'center';
//     imgPopup.style.display = 'none';

//     imgPopup.append(bigImg);

//     workSection.addEventListener('click', (e) => {
//         e.preventDefault();
//         const target = e.target;
//             if(target && target.classList.contains('preview')){
//                 imgPopup.style.display = 'flex';
//                 document.body.style.overflow = 'hidden';

//                 const path = target.parentElement.getAttribute('href');
//                 bigImg.setAttribute('src', path);
               
//             }
//             if(target && target.matches('div.popup')){
//                 imgPopup.style.display = 'none';
//                 document.body.style.overflow = '';
//                 }         
//     });   
// }

// images();




// АККАРДЕОН
// const accordionItemHeaders = document.querySelectorAll(".accardion__item-title");

// accordionItemHeaders.forEach(acc => {
//   acc.addEventListener("click", () => {
//     acc.classList.toggle("active");
    
//     const accordionItemBody = acc.nextElementSibling;
//     if(acc.classList.contains("active")) {
//       accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
//     }
//     else {
//       accordionItemBody.style.maxHeight = 0;
//     }
    
//   });
// });



});