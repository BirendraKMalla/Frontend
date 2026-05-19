let age = 7;
let experience = 3;
let Blacklisted = false;
let departmentApproval = true;

if (Blacklisted) {
    console.log("Application Rejected Candidate is blacklisted");
} 
else if (age < 18 && experience > 0) {
    console.log("Recommend for internship");
}
else if (experience < 2) {
    console.log("Not enough experience");
} 
else if (age > 30 && !departmentApproval) {
    console.log("Department approval required for candidates over 30 years old");
} 
else {
    console.log("Candidate is eligible for the position");
}