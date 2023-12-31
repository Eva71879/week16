const form = document.forms.form;
const userNameInput = form.elements.userName;
const email = form.elements.email;
const age = form.elements.age;
const gender = form.elements.gender;
const profession = form.elements.profession;
const password = form.elements.password;
const checkbox = form.elements.checkbox;

const submitButton = form.elements.submit;
submitButton.disabled = true;

const userNameError = document.getElementById('usernameError');

let userNameRegex = /[A-Za-z\s]+/;
let emailRegex = /^\w+@\w+\.\w+$/;
let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{8,20}$/;

console.log(emailRegex.test('test@example.com'));
console.log(passwordRegex.test('Abcd123!'));


form.addEventListener('submit', function (event) {
    // - Отменять действие по умолчанию для события `submit`
	event.preventDefault();


    if (userNameRegex.test(userNameInput.value) &&
    emailRegex.test(email.value) && 
    age != '' &&
    passwordRegex.test(password.value) && 
    checkbox.checked) {
    // - Если форма проходит проверку валидности, выводите в консоль значения полей формы и очищайте форму
    console.log(
        userNameInput.value,
        email.value,
        age.value,
        gender.value,
        profession.value,
        password.value,
        checkbox.value
    );
    form.reset();
    alert('Форма успешно отправлена!');

}

// - Отображать сообщение об ошибке рядом с каждым полем при обнаружении ошибки валидации
    let hasError = false;

    userNameError.style.display = 'none';

    if (userNameInput.value === '') {
        userNameError.textContent = 'Введите имя';
        userNameError.style.display = 'block';
        hasError = true;
    }
    
    if (hasError === false) {
    
      }
});


// - Кнопка отправки должна быть неактивна (`disabled`), пока все поля формы не будут правильно заполнены и не будет отмечен чекбокс согласия с условиями
checkbox.addEventListener('change', function() {
    if (userNameRegex.test(userNameInput.value) &&
        emailRegex.test(email.value) && 
        age != '' &&
        passwordRegex.test(password.value) && 
        checkbox.checked) {
        submitButton.disabled = false;
    }
});

// 4 Бонусное задание: реализуйте дополнительные обработчики событий `focus` и `blur` для каждого поля
	const inputs = document.querySelectorAll('input');

	inputs.forEach(function (input) {
		input.addEventListener('focus', function () {
			input.style.border = '10px solid #00ff25';
		});
		input.addEventListener('blur', function () {
			input.style.border = '';
		});
	});






