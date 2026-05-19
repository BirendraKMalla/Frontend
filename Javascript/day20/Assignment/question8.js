//LCM of two numbers

// relation between lcm and gcd is : lcm = n1*n2/gcd
let num1 = 20;
let num2 = 10;
let gcd = 1;
let lcm;
for (let i = 1; i <= num1 && i <= num2; i++) {
    if (num1 % i === 0 && num2 % i === 0) {
        gcd = i;
    }
}
lcm = (num1*num2)/gcd; 
console.log(lcm);