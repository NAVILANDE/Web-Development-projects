const { validateHeaderName } = require("http");

const form = document.getElementById('form');
const Username = document.getElementById('Username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();

});
const setError = (element, messages) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');


    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');

}
const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');


    errorDisplay.innerText = " ";
    inputControl.classList.add('success');
    inputControl.classList.remove('error');

}

const
 isvalidInputs =()=>{
    
 }
const validateInputs = () => {
    const UsernameValue = Username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if (UsernameValue === '') {
        setError(Username, 'Username is required');
    }
    else {
        setSuccess(Username);
    }

    if (emailValue===' ') {
        setSuccess(email,equird)
        
    }



}