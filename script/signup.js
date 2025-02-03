let showPasswordBtn = document.querySelector('.show-password', '.show-p');
let showPassword = document.querySelector('.show-p');
let passwordInp = document.querySelector('#password', '#cpassword');
let passwordIn = document.querySelector('#cpassword');

showPasswordBtn.addEventListener('click', () =>  {
    showPasswordBtn.classList.toggle('fa-eye');
    showPasswordBtn.classList.toggle('fa-eye-slash');

    passwordInp.type = passwordInp.type === 'password' ? 'text' : 'password';
})

showPassword.addEventListener('click', () =>  {
    showPassword.classList.toggle('fa-eye');
    showPassword.classList.toggle('fa-eye-slash');

    passwordInp.type = passwordInp.type === 'password' ? 'text' : 'password';
})