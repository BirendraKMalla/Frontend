// GCD of two numbers
let num1 = 20;
let num2 = 10;
let gcd = 1;
for (let i = 1; i <= num1 && i <= num2; i++) {
    if (num1 % i === 0 && num2 % i === 0) {
        gcd = i;
    }
}
console.log(gcd);