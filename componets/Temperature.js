const prompt = require('prompt-sync')({sigint: true});


// Get Celsius temperature from user
const celsiusTemp = parseFloat(prompt("Enter a temperature in Celsius:"));

// Conversion logic
let fahrenheit;
let message;

if (celsiusTemp < 0) {
  fahrenheit = (celsiusTemp * 9/5) + 32;
  message = `The temperature is ${fahrenheit.toFixed(2)} Fahrenheit (Freezing point).`;
} else if (celsiusTemp === 0) {
  message = "The temperature is at freezing point (0 degrees Celsius or 32 degrees Fahrenheit)";
} else {
  fahrenheit = (celsiusTemp * 9/5) + 32;
  message = `The temperature is ${fahrenheit.toFixed(2)} Fahrenheit.`;
}

// Display result
console.log(message);
