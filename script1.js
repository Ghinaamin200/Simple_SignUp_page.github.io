const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//funtions
//function to show error
function showError(input,message){
    const formControl = input.parentElement;
    //.className override the class name
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}
function showSucces(input){
    const formControl = input.parentElement;
    //.className override the class name
    formControl.className = 'form-control success';
}
//function to check email
function isValidEmail(email){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
//function to  
//This is an event listerner for form on submit
form.addEventListener('submit',function(e) {    
    e.preventDefault();
    if(username.value === ''){
        showError(username,'Username is Required')
    }else{
        showSucces(username);
    }

    if(email.value === ''){
        showError(email,'Email is Required')
    }else if(!isValidEmail(email.value)){
        showError(email,'Email is invalid')
    }else{
        showSucces(email);
    }

    if(password.value === ''){
        showError(password,'Password is Required')
    }else{
        showSucces(password);
    }

    if(password2.value === ''){
        showError(password2,'Password  is Required')
    }else{
        showSucces(password2n);
    }
})