//reverse string

let myString = "Hello World";
let length = 0;

//calculat length of string
while (myString[length] !== undefined) {
  length++;
}
// console.log(length);
let reversedString = "";
for (let i = length - 1; i >= 0; i--) {
  reversedString += myString[i];
}
console.log(reversedString);
