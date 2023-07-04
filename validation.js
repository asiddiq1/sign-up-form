
pswd = document.getElementById("password");
pswdError = document.getElementById("password-error");
phoneError = document.getElementById("phone-error");
confirmPswdError = document.getElementById("confirm-password-error");
confirmPswd = document.getElementById("confirm_password");
phone = document.getElementById("phone");
capital = document.getElementById("capital"); 
lower = document.getElementById("lower");
number = document.getElementById("number");
digit = document.getElementById("digits");

//user clicks on pswd field
pswd.onfocus = function(){
    
    if (validPasswd()){
        pswdError.style.display = "none";
        pswd.style.border = "solid #00918F";

    }
    else{
        pswdError.style.display = "block";
        pswd.style.border = "solid red";
    }
    
}

//user clicks outside pswd field
pswd.onblur = function(){
    pswdError.style.display = "none";
    pswd.style.border = "solid lightgray";

}


confirmPswd.onfocus = function(){

    if (confirmPasswd()){
        confirmPswdError.style.display = "none";
        confirmPswd.style.border = "solid #00918F";
    }
    else{
        confirmPswdError.style.display = "block";
        confirmPswd.style.border = "solid red";
    }

}

confirmPswd.onblur = function(){

    confirmPswdError.style.display = "none";
    confirmPswd.style.border = "solid lightgray";

}


confirmPswd.onkeyup = function(){

    if (confirmPasswd()){
        confirmPswdError.style.display = "none";
        confirmPswd.style.border = "solid #00918F";
    }

}


phone.onblur = function(){

    phoneError.style.display = "none";
    phone.style.border = "solid lightgray";

}

phone.onfocus = function(){

    if (validDigits()){
        phoneError.style.display = "none";
        phone.style.border = "solid #00918F";
    }
    else{
        phoneError.style.display = "block";
        phone.style.border = "solid red";
    }

}

phone.onkeyup = function(){
    var digits = /[0-9]{10}/;
    if (phone.value.match(digits) && phone.value.length == 10){
        digit.classList.remove("invalid");
        digit.classList.add("valid");
    }
    else{
        digit.classList.remove("valid");
        digit.classList.add("invalid");

    }

    if (validDigits()){
        phoneError.style.display = "none";
        phone.style.border = "solid #00918F";

    }
    else{

        phoneError.style.display = "block";
        phone.style.border = "solid red";
    }

}

//User types inside pswd
pswd.onkeyup = function(){
    var upperCaseLetters = /[A-Z]/g;
    if (pswd.value.match(upperCaseLetters)){
        capital.classList.remove("invalid");
        capital.classList.add("valid");
    }
    else{
        capital.classList.remove("valid");
        capital.classList.add("invalid");
    }
    var lowerCaseLetters = /[a-z]/g;  
    
    if (pswd.value.match(lowerCaseLetters)){
        lower.classList.remove("invalid");
        lower.classList.add("valid");
    }
    else{
        lower.classList.remove("valid");
        lower.classList.add("invalid");
    }
    var numbers = /[0-9]/g;
    if (pswd.value.match(numbers)){
        number.classList.remove("invalid");
        number.classList.add("valid");
    }
    else{
        number.classList.remove("valid");
        number.classList.add("invalid");
    }

    if (validPasswd()){
        pswdError.style.display = "none";
        pswd.style.border = "solid #00918F";

    }
    else{

        pswdError.style.display = "block";
        pswd.style.border = "solid red";
    }

}

validPasswd = function(){
    return number.className == "valid" && capital.className == "valid" && lower.className == "valid";

}

confirmPasswd = function(){
    return (pswd.value && pswd.value == confirmPswd.value);

}

validDigits = function(){
    return digit.className == "valid";
}


function checkForm(form){

    if (!validPasswd()){
        password.setCustomValidity("Password invalid");
        return false;
    }

    if (!confirmPasswd()){
        confirm_password.setCustomValidity("Passwords do not match");
        return false;

    }
    return true; 

}