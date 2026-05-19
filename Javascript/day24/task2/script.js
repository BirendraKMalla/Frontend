const emailHolder = document.getElementById('email'); 
const passwordHolder = document.getElementById('password'); 
const loginBtn = document.getElementById('loginBtn'); 
const spanText = document.getElementById('dynamicText'); 

loginBtn.addEventListener('click', function(){ 
    let emailValue = emailHolder.value; 
    let passwordValue = passwordHolder.value; 

    if(emailValue === "" && passwordValue === ""){ 
        spanText.innerText = "Both fields are required!!!" 
    } 
    else if(emailValue === ""){ 
        spanText.innerText = "Email field is required!!!" 
    } 
    else if(passwordValue === ""){ 
        spanText.innerText = "Password field is required!!!" 
    } 
    else if(passwordValue.length < 6){ 
        spanText.innerText = "Password length must be greater than 6" 
    } 
    else if(!emailValue.endsWith('@gmail.com') || emailValue.indexOf("@" === 0)){ 
        spanText.innerText = "Please enter a valid email!!!"; 
    } 
    else{ 
        spanText.innerText = "Login Successful!!!"; 
    } 
}); 
