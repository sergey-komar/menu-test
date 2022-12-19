window.addEventListener('load', function(){
	

	let menu = document.querySelector('.menu');
	let btnUp = document.querySelector('.btnUp');
	let links = menu.querySelectorAll('a');

	menu.addEventListener('click', (e)=>{
		let link = e.target;
		if(link.classList.contains('menu__link')){
			e.preventDefault();

			menu.querySelector('.menu__link-active').classList.remove('menu__link-active');//ДОБАЛЯЕМ ПОДСТВЕТКУ АКТИВНОМУ КЛАССУ ПРИ ПРОКРУТКЕ
			link.classList.add('menu__link-active');//ДОБАЛЯЕМ ПОДСТВЕТКУ АКТИВНОМУ КЛАССУ ПРИ ПРОКРУТКЕ

			let target = document.querySelector(link.hash);
			let pos = target.offsetTop - 70;

			window.scrollTo({
				top: pos,
				behavior: 'smooth'

			})
		}
	});

	
//КНОПКА НАВЕРХ //КНОПКА НАВЕРХ //КНОПКА НАВЕРХ
	btnUp.addEventListener('click', ()=>{
		window.scrollTo({
			top: 0, //При клике на кнопку прокручиваем к началу страницы
			behavior: 'smooth' 

		});
	});
	window.addEventListener('scroll', ()=>{
		let pos = window.pageYOffset;  
//innerHeight ВЫСОТА ТЕКУЩЕГО ОКНА экрана   
		if(pos > window.innerHeight){ //window.innerHeight   
			btnUp.classList.add('btnUp-visible')  
		}else{
			btnUp.classList.remove('btnUp-visible')  
		}
//КНОПКА НАВЕРХ //КНОПКА НАВЕРХ //КНОПКА НАВЕРХ //КНОПКА НАВЕРХ


		for(let i = links.length - 1; i >=0; i--){
			let link = links[i];
			let target = document.querySelector(link.hash);
	
			if(pos  + window.innerHeight / 2 > target.offsetTop){
				menu.querySelector('.menu__link-active').classList.remove('menu__link-active');//ДОБАЛЯЕМ ПОДСТВЕТКУ АКТИВНОМУ КЛАССУ ПРИ ПРОКРУТКЕ мышкой
				link.classList.add('menu__link-active');//ДОБАЛЯЕМ ПОДСТВЕТКУ АКТИВНОМУ КЛАССУ ПРИ ПРОКРУТКЕ мышкой
				break;
			}
		}
	})


	

});