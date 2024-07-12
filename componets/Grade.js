const prompt = require('prompt-sync')({sigint: true});

let grade = parseFloat (prompt("Enter the Grade:"));
let result;
let LetterGrade;

if (grade >= 90) {
    result = ("Excellents");
    LetterGrade = ("A");
}else if ( grade >= 80) {
    result = ("Very Good");
    LetterGrade = ("B");
}else if (grade >= 70) {
    result = ("Well Done");
    LetterGrade = ("C");
}else if (grade >= 60) {
    result = ("Avarage");
    LetterGrade = ("D")
}else {
    result = ("Work Hard");
    LetterGrade = ("F");
};
console.log (result);
console.log (`Your Grade is ${LetterGrade}`);