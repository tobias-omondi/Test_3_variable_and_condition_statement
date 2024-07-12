const prompt = require('prompt-sync')({sigint: true});

let grade = parseFloat (prompt("Enter the Grade:"));
let result;

if (grade >= 90) {
    result = ("Excellents");
}else if ( grade >= 80) {
    result = ("Very Good");
}else if (grade >= 70) {
    result = ("Well Done");
}else if (grade >= 60) {
    result = ("Avarage");
}else {
    result = ("Work hard");
};
console.log (result);