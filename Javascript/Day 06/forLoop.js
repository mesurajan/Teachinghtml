//create a program to print numbers from 1 to 10 using for loop

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

//create a program to print even numbers from 1 to 20 using for loop
let evenNumbers = parseInt(
  prompt("Enter a number to print even numbers up to:"),
);
for (let i = 2; i <= evenNumbers; i += 2) {
  console.log(i);
}

//create a program to print odd numbers from 1 to 20 using for loop
let oddNumbers = parseInt(prompt("Enter a number to print odd numbers up to:"));
for (let i = 1; i <= oddNumbers; i += 2) {
  console.log(i);
}

//create a program to print the sum of first 10 natural numbers using for loop
let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum = sum + i;
}
console.log("Sum of first 10 natural numbers:", sum);

//write a program to print the factorial of a given number using for loop
// create a program to print the Fibonacci series up to 20th number using for loop

let a = 0,
  b = 1,
  nextTerm;
console.log("Fibonacci Series:");

for (let i = 1; i <= 20; i++) {
  console.log(a);
  nextTerm = a + b;
  a = b;
  b = nextTerm;
}

//create a program to print the multiplication table of 7.
//create a program to print the multiplication table of a given number using for loop

let number = parseInt(
  prompt("Enter a number to print its multiplication table:"),
);
for (let i = 1; i <= 10; i++) {
  let result = number * i;
  console.log(number + " x " + i + " = " + result);
}

//create a program to print the following pattern using for loop
// *
// **
// ***
// ****
// *****
// ******

for (let i = 1; i <= 6; i++) {
  let pattern = "";
  for (let j = 1; j <= i; j++) {
    pattern += "*";
  }
  console.log(pattern);
}

//create a program to print the following pattern using for loop
// 1
// 12
// 123
// 1234
// 12345
for (let i = 1; i <= 5; i++) {
  let pattern = "";
  for (let j = 1; j <= i; j++) {
    pattern = pattern + j;
  }
  console.log(pattern);
}

//create a program to print the following pattern using for loop
// 1
// 22
// 333
// 4444
// 55555

//create a program to print the following pattern using for loop
//    *
//   ***
//  *****
// *******
//*********

for (let i = 1; i <= 5; i++) {
  let pattern = "";
  for (let j = 1; j <= 5 - i; j++) {
    pattern += " ";
  }
  for (let k = 1; k <= 2 * i - 1; k++) {
    pattern += "*";
  }
  console.log(pattern);
}

//crete a program to print the following pattern using for loop
//         *
//        **
//       ***
//      ****
//     *****

//cretae a program to print the following pattern using for loop
// *******
//  *****
//   ***
//    *
