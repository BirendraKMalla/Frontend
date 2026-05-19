let availableAttempts = 3;
const correctUsername = "admin";
const correctPassword = "password";
let inputUsername = "admin"; 
let inputPassword = "password"; 

if (inputUsername !== correctUsername) {
    console.log("Invalid Username");
} else {
    if (inputPassword === correctPassword) {
        console.log("Login Successful!");
    }
    while (inputPassword !== correctPassword && availableAttempts > 0) {
        console.log("Incorrect. Attempts remaining: "+availableAttempts);
        availableAttempts--;
    }
}
