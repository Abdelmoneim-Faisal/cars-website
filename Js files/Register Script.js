const form = document.getElementById('Form-Details');
const username = document.getElementById('Username');
const password = document.getElementById('Password');
const cpassword = document.getElementById('cPassword');
const email = document.getElementById('Email');
const cemail = document.getElementById('cEmail');
let z= 0;

form.addEventListener('click', (e) => {
    if(z<=5 )
    {
        e.preventDefault();
    }
    
    checkInput();
});

function checkInput(){
    const usernameV = username.value.trim();
    const EmailV = Email.value.trim();
    const cEmailV = cEmail.value.trim();
    const PasswordV = Password.value.trim();
    const cPasswordV = cPassword.value.trim();

    if(usernameV === ''){
        ErrorMsg(username,'Username can not be blank You have to fill it');
        }
        else{
                SuccessMsg(username,'');
                z+=1;
        }
    if(EmailV === ''){
            ErrorMsg(email,'Email can not be blank You have to fill it');
        }
        else{
                SuccessMsg(email,'');
                z+=1;
        }
        if(cEmailV === ''){
            ErrorMsg(cemail,'Email can not be blank You have to fill it');
        }
        else if(cEmailV !== EmailV){
            ErrorMsg(cemail,'Email has to be the same');
        }
        else{
                SuccessMsg(cemail,'');
                z+=1;
        }
        if(PasswordV === ''){
            ErrorMsg(password,'Password can not be blank You have to fill it');
        }
        else{
                SuccessMsg(password,'');
                z+=1;
        }
        if(cPasswordV === ''){
            ErrorMsg(cpassword,'Confirmed password can not be blank You have to fill it');
        }
        else if(cPasswordV !== PasswordV){
            ErrorMsg(cpassword,'Confirmed password has to be the same');
        }
        else{
                SuccessMsg(cpassword,'');
                z+=1;
        }                            
}
function ErrorMsg(input,message){
    const block = input.parentElement;
    const small = block.querySelector('small');
    small.innerText = message;
}
function SuccessMsg(input, noMessage ){
    const block = input.parentElement;
    const small = block.querySelector('small');
    small.innerText= noMessage;
}