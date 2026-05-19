// sum of digits of given numbr

let number = -2234;
let digit = 0;
let sum = 0;
if(number < 0){
    number = -number;
}
while(number>0){
    digit = number%10;
    sum += digit;
    number = Math.floor(number/10); // math.floor chops off the decimal part and keeps number as an integer
}
console.log(sum);