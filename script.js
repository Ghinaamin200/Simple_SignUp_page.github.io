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

//function to check if the required fields have data
function checkRequired(inputArray){
    inputArray.forEach(function(input) {
        if (input.value===''){
            showError(input,`${getFieldId(input)} is Required!`);
        }else{
            showSucces(input);
        }
    });
}
//function to get the id of the field
function getFieldId(input){
    return input.id.charAt(0).toUpperCase()+input.id.slice(1);
}
//function to check length
function checkLength(input,min,max){
    if(input.value.length <=min){
        showError(input,`${getFieldId(input)} needs to be atleast ${min} characters `);
    }else if(input.value.length > max){
        showError(input,`${getFieldId(input)} needs to be less than ${max} characters `);
    }else{
        showSucces(input);
    }
}
//function to check password and match with password2
function checkPasswordsMatch(input1,input2){
    if (input1.value !== input2.value){
        showError(input2,"Password don't match!")
    }
}
//function to check email
function checkEmail(input){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if ( re.test(input.value.trim())){
        showSucces(input);
    }else{
        showError(input,'Please Provide a valid email!')
    }
}
//This is an event listerner for form on submit
form.addEventListener('submit',function(e) {    
    e.preventDefault();
    checkRequired([username,email,password,password2]);
    checkLength(username,3,20);
    checkLength(password,6,30);
    checkEmail(email);
    checkPasswordsMatch(password,password2);

})