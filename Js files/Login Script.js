const form = document.getElementById('Form-Details');
const email = document.getElementById('Email');
const password = document.getElementById('Password');
let z= 0;

form.addEventListener('click', (e) => {
    if(z===0 || z===1 )
    {
        e.preventDefault();
    }
    checkLogin();
});

function checkLogin(){
    const EmailV = Email.value.trim();
    const PasswordV = Password.value.trim();

if(EmailV === ''){
    ErrorMsg(email,'Email can not be blank You have to fill it');
}
else if(EmailV !== 'admin@gmail.com'){

    ErrorMsg(email,"Email is not at our database")

}
else if(EmailV === 'admin@gmail.com'){ z=z+1; }
else{
        SuccessMsg(email,'');
}
if(PasswordV === ''){
    ErrorMsg(password,'Password can not be blank You have to fill it');

}
else if(PasswordV !=='Admin123' ){

    ErrorMsg(email,"Password is Wrong")
}
else if(PasswordV ==='Admin123' ){z=z+1;}
else{
        SuccessMsg(password,'');
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