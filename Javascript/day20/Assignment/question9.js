// ATM withdrwal system
let balance = 1400;
let withdrawAmount = 500;
if(withdrawAmount <= balance){
    console.log(withdrawAmount + " withdrawn successfully");
    console.log("Remaining balance: " + (balance - withdrawAmount));
}
else{
    console.log("Insufficient balance");
}