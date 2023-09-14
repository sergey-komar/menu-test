const quiz = document.querySelector('.quiz');
const passTestButton = document.querySelector('.pass-test__button');
const form = document.querySelector('.quiz-body__form');
const formItems = form.querySelectorAll('fieldset');
const btnsNext = form.querySelectorAll('.form-button__btn-next');
const btnsPrev = form.querySelectorAll('.form-button__btn-prev');
const answersObj = {
	step0: {
		question: '',
		answers: [],
	},
	step1: {
		question: '',
		answers: [],
	},
	step2: {
		question: '',
		answers: [],
	},
	step3: {
		question: '',
		answers: [],
	},
	step4: {
		question: '',
		answers: [],
	},
	step5: {
		name: '',
		phone: '',
		email: '',
		call: '',
	}
}

const progress = document.querySelector('.calc__status');
let counter = 1;
// Калькулятор, чтоб страница не дергалась.

const calc = document.querySelector('.calc');

btnsNext.forEach((btn, btnIndex) => {
	btn.addEventListener('click', (event) => {
		event.preventDefault();
		calc.scrollIntoView({ block: "start", inline: "center", behavior: 'smooth' });
		counter += 1;
		if (counter === 1) {
			progress.style.width = '0%';
		} else if (counter === 2) {
			progress.style.width = '25%';
		} else if (counter === 3) {
			progress.style.width = '50%';
		} else if (counter === 4) {
			progress.style.width = '75%';
		} else if (counter === 5) {
			progress.style.width = '100%';
		}

		formItems[btnIndex].style.display = 'none';
		formItems[btnIndex + 1].style.display = 'block';
	});

	btn.disabled = true;
});


btnsPrev.forEach((btn, btnIndex) => {
	btn.addEventListener('click', (event) => {
		event.preventDefault();
		calc.scrollIntoView({ block: "start", inline: "center", behavior: 'smooth' });
		counter -= 1;
		if (counter === 1) {
			progress.style.width = '0%';
		} else if (counter === 2) {
			progress.style.width = '25%';
		} else if (counter === 3) {
			progress.style.width = '50%';
		} else if (counter === 4) {
			progress.style.width = '75%';
		} else if (counter === 5) {
			progress.style.width = '100%';
		}
		formItems[btnIndex + 1].style.display = 'none';
		formItems[btnIndex].style.display = 'block';
	})
})



formItems.forEach((formItem, formItemIndex) => {

	if (formItemIndex === 0) {
		formItem.style.display = 'block';
	} else {
		formItem.style.display = 'none';
	}

	if (formItemIndex !== formItems.length - 1) {
		const inputs = formItem.querySelectorAll('input');
		const itemTitle = formItem.querySelector('.form__title');

		answersObj[`step${formItemIndex}`].question = itemTitle.textContent;



		inputs.forEach((input) => {
			const parent = input.parentNode;
			input.checked = false;
			parent.classList.remove('active-radio');
			parent.classList.remove('active-checkbox');
		});
	}

// Запись данных в форму CF7

function getChoiseValue(inputQuiz, inputForm) {
	let inputsQ = document.querySelectorAll('input[name='+ inputQuiz +']'),
	sendInput = document.querySelector('input[name='+ inputForm +']');

	inputsQ.forEach(item => {
		item.addEventListener('click', ()=> {
			if(item.checked) {
				console.log(item.value);
				sendInput.value = item.value;
			}
		})
	})
}

getChoiseValue('choice-first', 'text-1')
getChoiseValue('user_check', 'text-2')
getChoiseValue('choice-second', 'text-3')
getChoiseValue('choice-third', 'text-4')



	// ВЫБОР RADIO И CHECKBOX
	formItem.addEventListener('click', (event) => {
		const target = event.target;
		const inputsChecked = formItem.querySelectorAll('input:checked');



		if (formItemIndex !== formItems.length - 1) {
			if (inputsChecked.length > 0) {
				btnsNext[formItemIndex].disabled = false;
			} else {
				btnsNext[formItemIndex].disabled = true;
			}


			if (target.classList.contains('form__radio')) {
				const radios = formItem.querySelectorAll('.form__radio');
				radios.forEach(input => {
					if (input === target) {
						input.parentNode.classList.add('active-radio');
					} else {
						input.parentNode.classList.remove('active-radio');
					}
				})

			} else if (target.classList.contains('form__input')) {
				target.parentNode.classList.toggle('active-checkbox');
			} else {
				return;
			}
		}

	});

});
