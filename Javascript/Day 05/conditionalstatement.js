//create a age validator weither the given age is valid or not to vote

// let age = Number(prompt("Enter your age:"));
// if (age >= 18 && age <= 120) {
//   console.log("You are eligible to vote");
// } else {
//   console.log("You are not eligible to vote");
// }

//create a number validator to check if the given number is positive or negative

//create a number validator to check if the given number is odd or even

//create a number validator to check if the given number isprime or not

//create a temperature validator to check if the given temperature is hot or cold

// let temperature = parseInt(prompt("Enter the temperature in Celsius:"));
// if (temperature >= 36) {
//   console.log("The temperature is hot");
// } else if (temperature >= 15 && temperature < 36) {
//   console.log("The temperature is moderate");
// } else {
//   console.log("The temperature is cold");
// }

//create a temp validator to check if the person is suffering from fever or not
// ,as well as if  body temperature is normal or not and is he suffeering form
// hypothermia or not hint[,temp <20 hypothermia,temp >= 20 && temp <= 40 normal,
// temp > 40 fever]

//create a Gradechecker to check if the given marks are A, B, C, D or F
//hint [marks >= 90 A, marks >= 80 B, marks >= 70 C, marks >= 60 D, marks < 60 F]

//create a arithmetic calculator to perform addition, subtraction, multiplication and division
// based on the user input

let num1 = parseInt(prompt("Enter the first number:"));
let operator = prompt("Enter the operator (+, -, *, /):");
let num2 = parseInt(prompt("Enter the second number:"));

if (operator === "+") {
  let sum = num1 + num2;
  alert("The sum of " + num1 + " and " + num2 + " is: " + sum);
  console.log("The sum of " + num1 + " and " + num2 + " is:", sum);
} else if (operator === "-") {
  let difference = num1 - num2;
  alert("The difference of " + num1 + " and " + num2 + " is: ", difference);
  console.log(
    "The difference of " + num1 + " and " + num2 + " is:",
    difference,
  );
} else if (operator === "*") {
  let product = num1 * num2;
  alert("The product of " + num1 + " and " + num2 + " is: ", product);
  console.log("The product of " + num1 + " and " + num2 + " is:", product);
} else if (operator === "/") {
  let quotient = num1 / num2;
  alert("The quotient of " + num1 + " and " + num2 + " is: " + quotient);
  console.log("The quotient of " + num1 + " and " + num2 + " is:", quotient);
} else {
  console.log("Invalid operator");
}
