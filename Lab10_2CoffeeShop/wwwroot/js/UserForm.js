let firstNameError = document.querySelector('#FirstNameFormGroup div');
let lastNameError = document.querySelector('#LastNameFormGroup div');
let emailError = document.querySelector('#EmailFormGroup div');
let passwordError = document.querySelector('#PasswordFormGroup div');
let confirmPasswordError = document.querySelector('#ConfirmPasswordFormGroup div');

const displayFirstNameError = () => {
    let input = document.getElementById('FirstName').value;
    if (input.length <= 2 && input.length > 0) {
        firstNameError.innerText = 'First name must be at least 2 characters';
    }
    firstNameError.classList.remove('text-hide');
}

const displayLastNameError = () => {
    let input = document.getElementById('LastName').value;
    if (input.length <= 2 && input.length > 0) {
        lastNameError.innerText = 'Last name must be at least 2 characters';
    }
    lastNameError.classList.remove('text-hide');
}

const displayEmailError = () => {
    let input = document.getElementById('Email').value;
    let re = /.{2,}@.{2,}\..{2,}/;
    if (!re.test(input)) {
        emailError.classList.remove('text-hide');
    }
}