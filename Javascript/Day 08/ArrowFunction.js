function greet(Firstname, Secondname, address) {
  console.log("The name of the person is:", Firstname, Secondname, address);
}
greet("surajan", "shrestha", "lalitpur");
console.log("==================================================");

//sum of 2 numbers using paramaters and passing values to the function

function sumoftwonumbers(a, b) {
  let sum = a + b;
  console.log("The sum of two numbers is: " + sum);
}
sumoftwonumbers(10, 20);
console.log("==================================================");

//create a funciton name studentdetails which takes 3 parameters name, age and address and
// display the details of the student in arragned way

function studentdetails(name, age, address) {
  console.log("The details of the student are as follows:");
  console.log("The name of the student is:", name);
  console.log("The age of the student is:", age);
  console.log("The address of the student is:", address);
}
studentdetails("surajan", 26, "lalitpur");
console.log("==================================================");

//WAP to check the health of the person based on body tempearture using function
//where if body temperature is greater than 98.6 then the person is sufering from
// Heatstroke and if temperature is less than 26 then the person is suffering from
// Hypothermia and if temperature is between 27 to 38  then the person is healthy
// else if temp between 38 to 98 person is suffering from Fever using paramaters and
// passing values to the function

function checkHealth(temperature) {
  if (temperature > 98.6) {
    console.log("The person is suffering from Heatstroke.");
  } else if (temperature < 26) {
    console.log("The person is suffering from Hypothermia.");
  } else if (temperature >= 27 && temperature <= 38) {
    console.log("The person is healthy.");
  } else if (temperature > 38 && temperature <= 98) {
    console.log("The person is suffering from Fever.");
  } else {
    console.log("Invalid temperature.");
  }
}
checkHealth(-22);
console.log("==================================================");

const testarrow = () => {
  console.log("This is an arrow function");
};
testarrow();
