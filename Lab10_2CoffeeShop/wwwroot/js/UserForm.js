// Declare variables
let firstNameError = document.querySelector('#FirstNameFormGroup span');
let lastNameError = document.querySelector('#LastNameFormGroup span');
let emailError = document.querySelector('#EmailFormGroup span');
let passwordError = document.querySelector('#PasswordFormGroup span');
let confirmPasswordError = document.querySelector('#ConfirmPasswordFormGroup span');
let submitButton = document.querySelector('form button');
let form = document.querySelector('form');

// Functions to toggle the error messages on and off if the user does not put in the proper input
const toggleFirstNameError = () => {
    let input = document.getElementById('FirstName').value;
    if (input.length <= 2 && input.length > 0) {
        firstNameError.innerText = 'First name must be at least 2 characters';
        firstNameError.classList.remove('text-hide');
        return false;
    }
    else if (input.length === 0) {
        firstNameError.innerText = 'Please enter a first name before submitting the form';
        firstNameError.classList.remove('text-hide');
        return false;
    }
    else {
        if (!firstNameError.classList.contains('text-hide')) {
            firstNameError.classList.add('text-hide');
        }
        return true;
    }
}

const toggleLastNameError = () => {
    let input = document.getElementById('LastName').value;
    if (input.length <= 2 && input.length > 0) {
        lastNameError.innerText = 'Last name must be at least 2 characters';
        lastNameError.classList.remove('text-hide');
        return false;
    }
    else if (input.length === 0) {
        lastNameError.innerText = 'Please enter a last name before submitting the form';
        lastNameError.classList.remove('text-hide');
        return false;
    }
    else {
        if (!lastNameError.classList.contains('text-hide')) {
            lastNameError.classList.add('text-hide');
        }
        return true;
    }
}

const toggleEmailError = () => {
    let input = document.getElementById('Email').value;
    let re = /.{2,}@.{2,}\..{2,}/;
    if (!re.test(input)) {
        emailError.innerText = 'Please enter a valid email before submitting the form';
        emailError.classList.remove('text-hide');
        return false;
    }
    else {
        if (!emailError.classList.contains('text-hide')) {
            emailError.classList.add('text-hide');
        }
        return true;
    }
}

const togglePasswordError = () => {
    let input = document.getElementById('Password').value;
    let re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!re.test(input) && input.length > 0) {
        passwordError.innerText = 'Password must be at least 8 characters with at least 1 uppercase, 1 lowercase, 1 number, and 1 special character';
        passwordError.classList.remove('text-hide');
        return false;
    }
    else if (input.length === 0) {
        passwordError.innerText = 'Please enter a password before submitting the form';
        passwordError.classList.remove('text-hide');
        return false;
    }
    else {
        if (!passwordError.classList.contains('text-hide')) {
            passwordError.classList.add('text-hide');
        }
        return true;
    }
}

const toggleConfirmPasswordError = () => {
    let input = document.getElementById('ConfirmPassword').value;
    let input2 = document.getElementById('Password').value;
    if (input !== input2) {
        confirmPasswordError.innerText = 'Passwords must match before submitting the form';
        confirmPasswordError.classList.remove('text-hide');
        return false;
    }
    else {
        if (!confirmPasswordError.classList.contains('text-hide')) {
            confirmPasswordError.classList.add('text-hide');
        }
        return true;
    }
}

const submitForm = () => {
    let readyToSubmit = true;

    if (!toggleFirstNameError()) {
        readyToSubmit = false;
    }
    if (!toggleLastNameError()) {
        readyToSubmit = false;
    }
    if (!toggleEmailError()) {
        readyToSubmit = false;
    }
    if (!togglePasswordError()) {
        readyToSubmit = false;
    }
    if (!toggleConfirmPasswordError()) {
        readyToSubmit = false;
    }

    if (readyToSubmit) {
        form.submit();
    }
}

submitButton.addEventListener('click', submitForm);