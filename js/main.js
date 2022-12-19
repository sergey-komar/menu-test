window.addEventListener('DOMContentLoaded', () => {

const menu = document.querySelector('.menu');
const mobile = document.querySelector('.nav-icon');

mobile.addEventListener('click', function(){
    this.classList.toggle('nav-icon--active');
    menu.classList.toggle('nav--active');
});



// TABS
const tabsItem = document.querySelector('.tabs__item');
const tabsItemBtn = document.querySelectorAll('.tabs__item-btn');
const tabsContent = document.querySelectorAll('.tabs__content');

function tabsHide() {
    tabsContent.forEach(item=>{
        item.classList.add('hide');
        item.classList.remove('show');
    });

    tabsItemBtn.forEach(item=>{
        item.classList.remove('active');
    })
}

function tabsShow(i){
    tabsContent[i].classList.add('show');
    tabsContent[i].classList.remove('hide');
    tabsItemBtn[i].classList.add('active');

}

tabsItem.addEventListener('click', (e)=>{
    const target = e.target;
    if(e.target.classList.contains('tabs__item-btn')){
        tabsItemBtn.forEach((item, i)=>{
            if(target === item){
                tabsHide();
                tabsShow(i);
            }
        })
    }
})
tabsHide();
tabsShow(0);


const modalOpen = document.querySelectorAll('[data-modal]');
const modal = document.querySelector('.modal');
const modalClose = document.querySelector('[data-close]');

   modalOpen.forEach(item => {
        item.addEventListener('click', ()=>{
            modal.classList.add('show');
            modal.classList.remove('hide');
            document.body.style.overflow = 'hidden';
        });
   });

   modalClose.addEventListener('click', ()=>{
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow = '';
   });

   modal.addEventListener('click', (e)=>{
    if(e.target === modal){
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }
   })


   document.addEventListener('keydown', (e) =>{
    if(e.code === 'Escape' && modal.classList.contains('show')){
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }
   });



//    images
const imgPopup = document.createElement('div');
const workSection = document.querySelector('.works');
const bigImage = document.createElement('img');

   function images(){
    imgPopup.classList.add('popup');
    workSection.appendChild(imgPopup);

    imgPopup.style.justifyContent = 'center';
    imgPopup.style.alignItems = 'center';
    imgPopup.style.display = 'none';

    imgPopup.appendChild(bigImage);

    workSection.addEventListener('click', (e)=>{
        e.preventDefault();
        const target = e.target;

        if(target && target.classList.contains('preview')){
            imgPopup.style.display = 'flex';
            document.body.style.overflow = 'hidden';

            const path = target.parentNode.getAttribute('href');
            bigImage.setAttribute('src', path);
        }

        if(target && target.matches('div.popup')){
            imgPopup.style.display = 'none';
            document.body.style.overflow = '';
        }
    })
   }

   images();

});