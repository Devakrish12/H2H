const signin = document.querySelector('input[name="signin"]');

signin.addEventListener('click', myfunction);

function myfunction() {
    document.querySelector('.container a').innerText = "Welcome";
    document.querySelector('.container input').innerText = "SignUp";
    document.querySelector('.head h2').innerText = "Login to your Account";
    document.querySelector('.f-name').remove();
    document.querySelector('.user-Id').remove();
    document.querySelector('.condition li').remove();
    document.querySelector('.click').innerText = "Log In";
}
 