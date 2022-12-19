window.addEventListener('load', function(){

	let faq = document.querySelector('.faq');

	faq.addEventListener('click', (e)=>{
		if(e.target.classList.contains('ask')){
			toggleItem(e.target);
		}
	})
	function toggleItem(ask){
		let answer = ask.nextElementSibling;//ask.parentNode.querySelector('.answer')
		if(answer.classList.contains('open')){
			let animate = answer.animate([
				{ opacity:1, transform: 'translateX(0)'},
				{ opacity:0, transform: 'translateX(100px)'}],
				{ duration: 500});

				animate.addEventListener('finish', ()=>{
					answer.classList.remove('open');
				})
				
			}else{
				answer.classList.add('open');
			}
	}
});


/*
	open: addClass, d: block, anim
	close: addClass, anim
			anim.onend = d: none
*/