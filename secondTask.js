
//     2 Добавьте стили для формы
    
//     3 Используя JavaScript, добавьте обработчик события отправки формы (`submit`), который будет выполнять следующие действия:

const form = document.forms.form;
const userNameInput = form.elements.userName;
const userNameError = document.getElementById('usernameError');
console.log(userNameError);

form.addEventListener('submit', function (event) {
	event.preventDefault();
    let hasError = false;

    userNameError.style.display = 'none';

    if (userNameInput.value = '') {
        userNameError.textContent = 'Введите имя';
        userNameError.style.display = 'block';
        hasError = true;
    }
    
    if (hasError === false) {
        alert('Форма успешно отправлена!');
      }
});

function validateName(name) {
    let regex = /[A-Za-z\s]+/;
    return regex.test(name);
  };


const emailInput = document.forms.formOne.elements.firstEmail;
const errorMessage = document.getElementById('errorMessage');

form.addEventListener('input', function () {
	const nameValue = name.value;
	const nameRegex = /[A-Za-z\s]+/;

	if (nameRegex.test(nameValue)) {
		errorMessage.classList.remove('error-message');
		errorMessage.textContent = '';
	} else {
		errorMessage.classList.add('error-message');
		errorMessage.textContent = 'Некорректный формат имени'
	}
});

    
//     - Отображать сообщение об ошибке рядом с каждым полем при обнаружении ошибки валидации
//     - Кнопка отправки должна быть неактивна (`disabled`), пока все поля формы не будут правильно заполнены и не будет отмечен чекбокс согласия с условиями
//     - Если форма проходит проверку валидности, выводите в консоль значения полей формы и очищайте форму
    
//     4 Бонусное задание: реализуйте дополнительные обработчики событий `focus` и `blur` для каждого поля


// formOne.addEventListener('submit', function (event) {
// 	const errorMessage = document.getElementById('errorMessage');
// 	if (inputName.value.length === 0) {
// 		event.preventDefault(); //Отмена отправки
// 		errorMessage.textContent = 'Заполните поле "Имя"';
// 	} else if (inputEmail.value.length === 0) {
// 		event.preventDefault(); //Отмена отправки
// 		errorMessage.textContent = 'Заполните поле "Email"'
// 	}
// });