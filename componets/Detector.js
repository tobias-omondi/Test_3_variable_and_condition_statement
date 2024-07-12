// conversion logic
const prompt = require('prompt-sync')({sigint: true});

let number = parseFloat(prompt ("Enter the number:"));
let message;

if (number > 0 ) {
    message = ('The number is postive');
}else if (number < 0) {
    message = ('The number is negative');
}else {
    message = ('the number is Zero');
};

console.log (message)