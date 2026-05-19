// Write a function that takes a letter and prints whether it’s a vowel or consonant using an if-else statement.
function checkletter(letter) {
    if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u' 
        || letter === 'A' || letter === 'E' || letter === 'I' || letter === 'O' || letter === 'U'
    ) {
        console.log(letter + " is a vowel");
    } else if (letter >= 'a' && letter <= 'z') {
        console.log(letter + " is a consonant");
    } else {
        console.log("Please provide a valid letter.");
    }
}

checkletter('O'); 
checkletter('g');