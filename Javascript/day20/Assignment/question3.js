// no of digits in a given number
let number = 0;
let digits = 0;
if (number === 0) digits = 1;
else {
  while (number >= 1) {
    number /= 10;
    digits++;
  }
}
console.log(digits);