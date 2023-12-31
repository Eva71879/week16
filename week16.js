//Задание 1
//Найдите все формы на странице. При нажатии на кнопку выведите количество найденных форм.
//Подсказка: используйте коллекцию document.forms и свойство length

function makeOne() {
	const paragraph = document.getElementById('practicum');
	paragraph.innerHTML = document.forms.length;
}
document.querySelector('.b-1').addEventListener('click', makeOne);

//Задание 2
//Найдите первую форму на странице. При нажатии на кнопку выведите значение атрибута "name" этой формы.
//Подсказка: используйте коллекцию document.forms и метод getAttribute

function makeTwo() {
	const paragraphTwo = document.getElementById('practicum2');
	paragraphTwo.innerHTML = document.forms[0].getAttribute('name');
}

document.querySelector('.b-2').addEventListener('click', makeTwo);

//Задание 3
//Найдите последнюю форму на странице. При нажатии на кнопку выведите значение атрибута "name" этой формы.
//Подсказка: используйте коллекцию document.forms и метод getAttribute

function makeThree() {
	const paragraphThree = document.getElementById('practicum3');
	paragraphThree.innerHTML = document.forms[document.forms.length - 1].getAttribute('name');
}

document.querySelector('.b-3').addEventListener('click', makeThree);

//Задание 4
//Найдите все формы на странице и выведите их названия
//При нажатии на кнопку выведите названия всех найденных форм, разделенных запятыми
//Подсказка: Для решения задания вы можете использовать следующую логику:
//- Получите все формы на странице, используя коллекцию document.forms
//- Создайте пустой массив formNames для хранения названий форм
//- Пройдитесь по каждой форме в коллекции и для каждой формы
//- Получите значение атрибута name с помощью метода getAttribute
//- Добавьте полученное название в массив formNames
//- Преобразуйте массив formNames в строку, разделив названия запятыми, с помощью метода join()
//- Выведите полученную строку названий форм в элемент с id practicum4 при нажатии на кнопку

const formNames = [];
function makeFour() {
	for (let i = 0; i < document.forms.length; i++) {
		const name = document.forms[i].getAttribute('name');
		formNames.push(name);
	}
	const paragraphFour = document.getElementById('practicum4');
	paragraphFour.innerHTML = formNames.join(', ');
}

document.querySelector('.b-4').addEventListener('click', makeFour);

//Задание 5
//Найдите третью форму на странице, используя document.forms и имя формы (которое вы знаете из задания 4)
//Выведите на страницу количество элементов в форме, используя коллекцию form.elements
//Подсказка: используйте коллекцию document.forms для получения формы по индексу и свойство form.elements.length для получения количества элементов в форме

function makeFive() {
	const paragraphFive = document.getElementById('practicum5');
	paragraphFive.innerHTML = document.forms.formThree.elements.length;
}

document.querySelector('.b-5').addEventListener('click', makeFive);

//Задание 6
//Найдите вторую форму на странице, используя document.forms и имя формы (которое вы знаете из задания 4)
//Выведите на страницу количество элементов в форме, используя коллекцию form.elements

function makeSix() {
	const paragraphSix = document.getElementById('practicum6');
	paragraphSix.innerHTML = document.forms.formTwo.elements.length;
}

document.querySelector('.b-6').addEventListener('click', makeSix);

//Задание 7
//Выведите перечисление названий (name) всех элементов второй формы на экран. В задании 6 вы нашли их количество.
//Подсказка:
//- Используйте document.forms для получения коллекции всех форм на странице
//- Найдите вторую форму в коллекции форм, используя индекс 1 (индексы начинаются с 0)
//- Получите коллекцию элементов формы с помощью свойства elements у второй формы
//- Создайте пустую строку elementsList, которая будет хранить перечисление названий элементов
//- Используя цикл for, переберите элементы формы в коллекции formElements
//- Внутри цикла добавьте текущее название элемента формы (свойство name) в elementsList, добавляя дефис перед названием
//- После цикла выведите текст с перечислением элементов в элемент с id practicum7, используя свойство textContent

const paragraphSeven = document.getElementById('practicum7');
const formTwoElements = document.forms[1].elements;
let elementsList = '';
const elementsNames = [];

function makeSeven() {
	for (let i = 0; i < formTwoElements.length; i++) {
		elementsNames.push(formTwoElements[i].name);
		elementsList = '- ' + elementsNames.join(', - ');
	}
	paragraphSeven.textContent = elementsList;
	console.log(elementsList);
}

document.querySelector('.b-7').addEventListener('click', makeSeven);

//Задание 8
//Выведите перечисление названий (name) всех элементов первой формы на экран. В задании 5 вы нашли их количество.

const paragraphEight = document.getElementById('practicum8');
const formOneElements = document.forms[0].elements;
let elementsListFormOne = '';
const elementsNamesFormOne = [];

makeEight = () => {
	let i = 0;
	do {
		elementsNamesFormOne.push(formOneElements[i].name);
		i++;
	}
	while (i < formOneElements.length);

	elementsListFormOne = ' -' + elementsNamesFormOne.join(', - ');
	paragraphEight.textContent = elementsListFormOne;
}

document.querySelector('.b-8').addEventListener('click', makeEight);

//Задание 9
//Найдите третью форму на странице. Выведите перечисление названий (name) всех элементов формы на экран.

makeNine = () => {
	const paragraphNine = document.getElementById('practicum9');
	const formThreeElements = document.forms[2].elements;
	const elementsNames = [];

	for (i = 0; i < formThreeElements.length; i +=1) {
	elementsNames.push(formThreeElements[i].name);
	}

	let elementsList = '';
	elementsList = ' -' + elementsNames.join(', -');
	paragraphNine.textContent = elementsList;
}

document.querySelector('.b-9').addEventListener('click', makeNine);

//Задание 10
//Выведите на экран значенеие radio кнопки третьей формы на странице
//Подсказка: используйте коллекцию document.forms для доступа к формам, свойство elements для доступа к элементам формы и свойство value для получения значения radio кнопки

//наверное, имелась ввиду четвертая форма - только в ней есть radio

const lastForm = document.forms[3];
const paragraphTen = document.getElementById('practicum10');

makeTen = () => paragraphTen.textContent = lastForm.elements[0].value;

document.querySelector('.b-10').addEventListener('click', makeTen);

//Задание 11
//Выведите значения всех опций из первой формы
//Подсказка: используйте коллекцию document.forms для доступа к формам, свойство elements для доступа к элементам формы и свойство value для получения значения выбранной опции
//- Получите доступ к форме с помощью document.forms и сохраните её в переменную
//- Получите доступ к элементу select с помощью form.elements и сохраните его в переменную
//- Создайте пустую строку optionsValues, которая будет хранить значения всех опций
//- Используйте цикл для перебора опций в коллекции элемента select
//- Внутри цикла получите значение каждой опции с помощью свойства value и добавьте его в optionsValues
//- Выведите значения опций на страницу

//переменная была объявлена мной в задании 8
// const formOneElements = document.forms[0].elements;

const paragraphEleven = document.getElementById('practicum11');
const select = formOneElements[2];
let optionsValues = '';
let selectValues = [];

makeEleven = () => {
	for (i = 0; i < select.length; i +=1) {
		selectValues.push(select[i].value);
	}
	optionsValues = selectValues.join(', ');	
	paragraphEleven.textContent = optionsValues;
}

document.querySelector('.b-11').addEventListener('click', makeEleven);

//Задание 12
//Выведите значения атрибутов id всех чекбоксов (количество: 3) из второй формы
//Подсказка:
//- Получите доступ к форме с помощью document.forms и сохраните её в переменную
//- Получите доступ к чекбоксам с помощью form.elements и сохраните их в переменные
//- Получите значения атрибутов id всех чекбоксов второй формы

// const formTwo = document.forms.formTwo;
// const checkbox1 = formTwo.elements.checkboxOne;
// const checkbox2 = formTwo.elements.checkboxTwo;
// const checkbox3 = formTwo.elements.checkboxThree;
// const checkboxIds = [];
// checkboxIds.push(checkbox1.id, checkbox2.id, checkbox3.id);
// let formTwoIds = '';
// formTwoIds = checkboxIds.join(', ');

// function makeTwelve() {
// 	const paragraphTwelve = document.getElementById('practicum12');
// 	paragraphTwelve.textContent = formTwoIds;
// }

// document.querySelector('.b-12').addEventListener('click', makeTwelve);

//или (но в задании было написано создать отдельные переменные каждому чекбоксу)

// const checkboxes = formTwo.querySelectorAll('input[type="checkbox"]');
// const checkboxIds = Array.from(checkboxes).map(checkbox => checkbox.id);
// const formTwoIds = checkboxIds.join(', ');

// Задание 13
//Проверьте была ли выбрана кнопка четвёртой формы
//Подсказка:
//- Получите доступ к форме с помощью document.forms и сохраните её в переменную
//- Получите доступ к radio кнопке с помощью form.elements и сохраните её в переменную
//- Используйте условный оператор (if) для проверки выбранности кнопки
//- Если кнопка выбрана, выведите сообщение "Кнопка выбрана" на страницу
//- Если кнопка не выбрана, выведите сообщение "Кнопка не выбрана" на страницу

const lastFormRadio = lastForm.elements[0];
const paragraphThirteen = document.getElementById('practicum13');
function checkButton(e) {
	e.preventDefault();
	if (lastFormRadio.checked) {
		paragraphThirteen.textContent = 'Кнопка выбрана';
	} else {
		paragraphThirteen.textContent = 'Кнопка не выбрана';
	}
}

document.querySelector('.b-13').addEventListener('click', checkButton);


//Задание 14
//Выведите на экран название выбранного варианта в первой форме
//Подсказка:
//- Получите доступ к форме с помощью document.forms и сохраните её в переменную
//- Получите доступ к элементу select с помощью form.elements и сохраните его в переменную
//- Установите выбранным любой вариант формы
//- Используйте свойство value выбранной опции для получения выбранного варианта
//- Напишите проверку, которая используя условный оператор (if) будет выводить в элемент paragraphFourteen название выбранного варианта

//переменная была объявлена мной в задании 11
// const select = formOneElements[2];
const paragraphFourteen = document.getElementById('practicum14');

function checkOption(evt) {
	evt.preventDefault();
	if (select.value) {
		paragraphFourteen.textContent = 'Название выбранного варианта: ' + select.value;
	}
	// paragraphFourteen.textContent = select.value
	// ? 'Название выбранного варианта: ' + select.value
	// : 'Элемент не выбран'; //тренирую тернарный оператор
}

document.querySelector('.b-14').addEventListener('click', checkOption);

//Задание 15
//Добавьте в первую форму выбранную Опцию 3 по умолчанию
//Подсказка:
//- Получите доступ к форме с помощью document.forms и сохраните её в переменную
//- Получите доступ к элементу select с помощью form.elements и сохраните его в переменную
//- Используйте свойство selectedIndex элемента select, чтобы установить выбранный индекс опции по умолчанию
//- Установите значение selectedIndex равным индексу опции, которую вы хотите выбрать по умолчанию

//переменная была объявлена мной в задании 11
// const select = formOneElements[2];

// console.log(select.options[2].value);

// makeFifteen = () =>	select.selectedIndex = 2;
// makeFifteen();

//или:
// function makeFifteen() {
// 	select.options[2].selected = true;
// }
// makeFifteen();

//Задание 16
//Добавьте во вторую форму выбранный Вариант 3 по умолчанию
//Подсказка:
//- Получите доступ к форме с помощью document.forms и сохраните её в переменную
//- Получите доступ к элементу checkbox с помощью form.elements и сохраните его в переменную
//- Используйте свойство checked элемента checkbox, чтобы установить его выбранным по умолчанию
//- Установите значение checked равным true для выбранного варианта

//переменную объявила в задании 12
// const checkbox3 = formTwo.elements.checkboxThree;

makeSixteen = () => checkbox3.checked = true;
makeSixteen();

//Задание 17
//Проверьте, заполнены ли все поля первой формы перед отправкой
//Подсказка:
//- Получите доступ к форме с помощью document.forms и сохраните её в переменную formOne
//- Получите доступ к каждому полю формы с помощью form.elements и сохраните их в соответствующие переменные
//- Используйте условные операторы (if) для проверки каждого поля на заполненность
//- Если хотя бы одно поле не заполнено, выведите сообщение об ошибке на страницу (элемент для добавления ошибки создан: <p class="error-message" id="errorMessage"></p>)
//- Добавьте слушатель события submit к форме, чтобы выполнить проверку перед отправкой
//- В обработчике события вызовите метод event.preventDefault() для отмены отправки формы в случае ошибки

//переменную объявила в задании 8
//const formOneElements = document.forms[0].elements;

const inputName = formOneElements[0];
const inputEmail = formOneElements[1];

formOne.addEventListener('submit', function (event) {
	const errorMessage = document.getElementById('errorMessage');
	if (inputName.value.length === 0) {
		event.preventDefault(); //Отмена отправки
		errorMessage.textContent = 'Заполните поле "Имя"';
	} else if (inputEmail.value.length === 0) {
		event.preventDefault(); //Отмена отправки
		errorMessage.textContent = 'Заполните поле "Email"'
	}
});

//Задание 18
//Очистите все поля первой формы после отправки
//Подсказка:
//- Получите доступ к форме с помощью document.forms и сохраните её в переменную
//- Используйте метод reset() формы, чтобы очистить все её поля после отправки
//- Добавьте слушатель события addEventListener на первую форму, как вы делали в задании 17
//- В обработчике события вызовите метод event.preventDefault() для отмены отправки формы в случае ошибки

//Ваш код

// formOne.addEventListener('submit', function (event) {
// 	formOne.reset();
// 	event.preventDefault();
// });

//не совсем поняла, что от меня требуется в 18м задании, потому что в 17м задании при успешном заполнении форм после их отправки поля и так очищаются


//Задание 19
//При выборе определенной опции из выпадающего списка измените цвет фона страницы
//Подсказка:
//- Получите доступ к элементу select с помощью document.getElementById или другим методом выборки элементов и сохраните его в переменную
//- Используйте событие change для отслеживания изменений в выборе опции
//- В обработчике события, используя условные операторы (if), проверьте выбранную опцию
//- В зависимости от выбранной опции, измените цвет фона страницы, используя свойство document.body.style.backgroundColor

//переменная была объявлена мной в задании 11
// const select = formOneElements[2];

// const selectElement = document.getElementById('colorSelector'); //видимо, по ошибке здесь оставили эту строку

select.addEventListener('change', function () {
	if (select.options[0].selected) {
		document.body.style.background = '#09ed27';
	} else if (select.options[1].selected) {
		document.body.style.background = '#ffff00';
	} else if (select.options[2].selected) {
		document.body.style.background = '#ff0000';
	}	
});

//Задание 20
//Добавьте валидацию для поля Email
//Подсказка:
//- Получите доступ к первой форме с помощью document.forms и сохраните её в переменную
//- Получите доступ к полю Email с помощью form.elements и сохраните его в переменную
//- Используйте событие input для отслеживания изменений в поле Email
//- В обработчике события, используя регулярное выражение (RegExp: /^[^\s@]+@[^\s@]+.[^\s@]+$/), проверьте введенное значение поля Email
//- В зависимости от результата проверки, измените стиль поля Email (например, установите класс с ошибкой) и отобразите сообщение об ошибке в элементе <p> (добавьте элемент самостоятельно) с помощью свойства textContent.

const emailInput = document.forms.formOne.elements.firstEmail;
const errorMessage = document.getElementById('errorMessage');

emailInput.addEventListener('input', function () {
	const emailValue = emailInput.value;
	const emailRegex = /^[^\s@]+@[^\s@]+.[^\s@]+$/;

	if (emailRegex.test(emailValue)) {
		errorMessage.classList.remove('error-message');
		errorMessage.textContent = '';
	} else {
		errorMessage.classList.add('error-message');
		errorMessage.textContent = 'Некорректный формат email'
	}
});

//Задание 21
//При отправке второй формы выполните проверку всех чекбоксов. Если ни один из чекбоксов не выбран, отмените отправку формы и выведите сообщение об ошибке в элементе с id "result21".
const checkbox1 = document.getElementById('checkbox1').checked;
const result21 = document.getElementById('result21');

document.forms.formTwo.addEventListener('submit', function (evt) {
	evt.preventDefault();	
	const checkbox1 = document.getElementById('checkbox1').checked;
	const checkbox2 = document.getElementById('checkbox2').checked;
	const checkbox3 = document.getElementById('checkbox3').checked;
	if (!checkbox1 || !checkbox2 || !checkbox3) {
		result21.textContent = 'Выберите хотя бы один из вариантов';
	}
});

//Задание 22
//При отправке третьей формы выполните проверку поля Имя на заполненность. Если поле Имя пустое, отмените отправку формы и выведите сообщение об ошибке в элементе с id "result22".

const result22 = document.getElementById('result22');

document.querySelector('.b-22').onclick = function (event) {
	event.preventDefault();
	const nameInput = document.forms.formThree.elements.thirdName;
	if (nameInput.value == false) {
		result22.textContent = 'Заполните поле "Имя"';
	}
};

//Задание 23
//При выборе опции "Я хочу зарегистрироваться" в четвёртой форме кнопка должна быть разблокирована. В противном случае, сделайте кнопку отправки формы заблокированной.
//Подсказка: используйте свойство disabled

//переменная была объявлена в задании 13:
// const lastFormRadio = lastForm.elements[0];
const submitButton = lastForm.elements.fourthButton;
submitButton.disabled = true;

lastFormRadio.addEventListener('change', function() {
		submitButton.disabled = !lastFormRadio.checked;
});

//Задание 24
//Найдите все поля ввода на странице (querySelectorAll) и установите им атрибут "placeholder" со значением "Введите данные" (используйте метод forEach).

const allInputs = document.querySelectorAll('input');
document.querySelector('.b-24').addEventListener('click', function () {
	allInputs.forEach(item => item.placeholder = 'Введите данные')
});

//Задание 25
//При фокусе на любом поле ввода измените его границу на цвет "#00ff00". При потере фокуса восстановите стандартную границу.

document.querySelector('.b-25').addEventListener('click', function () {
	const inputs = document.querySelectorAll('input');

	inputs.forEach(function (input) {
		input.addEventListener('focus', function () {
			input.style.border = '1px solid #00ff00';
		});
		input.addEventListener('blur', function () {
			input.style.border = '';
		});
	});
});

//Задание 26
//При нажатии на кнопку "Задание 26" отобразите в элементе с id "result26" значение placeholder из поля имя в третьей форме

document.querySelector('.b-26').addEventListener('click', function (event) {
	event.preventDefault();
	document.getElementById('result26').textContent = formThree.elements.thirdName.placeholder;
});

//Задание 27
//При изменении значения любого из полей второй формы отобразите сообщение с текстом "Изменение внесено" в элементе с id "result27"

const formTwoInputs = document.querySelectorAll('.secondForm input');

formTwoInputs.forEach(function (input) {
	input.addEventListener('input', function () {
		if (input.value) {
			document.getElementById('result27').textContent = 'Изменение внесено'
		}
	});
});

// formTwoInputs.forEach(function (input) {
// 	input.addEventListener('input', () => document.getElementById('result27').textContent = inputValue ? 'Изменение внесено' : '');
// }); //с тернарным оператором в виде стрелочной функции

//Задание 28
//При выборе любой из опций выпадающего списка в третьей форме отобразите сообщение с текстом "Опция выбрана" в элементе с id "result28"
//наверное имелась ввиду все-таки первая форма//

const selectFormThree = document.getElementById('firstSelect');

selectFormThree.addEventListener('change', function () {
	document.getElementById('result28').textContent = 'Опция выбрана';
});
