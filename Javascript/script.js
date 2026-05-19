// even
let evenSum = 0;
let oddSum = 0;
for (let i = 0; i<=50; i++){
    if(i%2==0){
        console.log(i)
        evenSum += i;
    }
}

console.log("\n");

// odd
for (let i = 0; i<=50; i++){
    if(i%2!=0){
        console.log(i)
        oddSum += i;
    }
}

console.log(evenSum);
console.log(oddSum);