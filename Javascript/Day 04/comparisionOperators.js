// // JavaScript Comparison Operators
// // Comparison operators compare two values and return true or false.

// const firstNumber = 10;
// const secondNumber = 5;
// const numberText = "10";

// // 1. Equal to (==): compares values after type conversion.
// console.log("10 == '10':", firstNumber == numberText); // true

// // 2. Strict equal to (===): compares both value and data type.
// console.log("10 === '10':", firstNumber === numberText); // false

// // 3. Not equal to (!=): checks whether values are different.
// console.log("10 != 5:", firstNumber != secondNumber); // true

// // 4. Strict not equal to (!==): checks value and data type.
// console.log("10 !== '10':", firstNumber !== numberText); // true

// // 5. Greater than (>).
// console.log("10 > 5:", firstNumber > secondNumber); // true

// // 6. Less than (<).
// console.log("10 < 5:", firstNumber < secondNumber); // false

// // 7. Greater than or equal to (>=).
// console.log("10 >= 10:", firstNumber >= 10); // true

// // 8. Less than or equal to (<=).
// console.log("5 <= 10:", secondNumber <= firstNumber); // true

// // Four practice questions

// // Question 1: Is a person old enough to vote? make a constant age and check if the age
// // is greater than or equal to 18 he/she is able to vote .Take the age form user.

// const age = parseInt(prompt("Enter your age:"));
// console.log("Q1. Can the person vote?", age >= 18); // true or false based on input

// // Question 2: Do these values have the same value and data type?
// // Create two constants, one with a number and another with a string representation of
// // the same number.

// const score = 100;
// const savedScore = "100";
// console.log("Q2. Are the scores strictly equal?", score === savedScore); // false

// // Question 3: Is the entered password different from the correct password?
// // Create two constants, one for the correct password and another for the entered password.
// // Check if they are not equal taking input from the user.

// const correctPassword = "javascript123";
// const enteredPassword = prompt("Enter your password:");
// console.log(
//   "Q3. Is the entered password incorrect?",
//   enteredPassword !== correctPassword,
// ); // true or false based on input

// // Question 4: Is the temperature within a specific range?
// // Create a constant for the temperature and check if it is between
// //  20 and 30 degrees Celsius (inclusive).

// const temperature = parseFloat(prompt("Enter the temperature in Celsius:"));
// console.log(
//   "Q4. Is the temperature within range?",
//   temperature >= 20 && temperature <= 30,
// ); // true or false based on input
