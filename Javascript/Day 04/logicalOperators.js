// JavaScript Logical Operators
// Logical operators combine or reverse Boolean values.
const isLoggedIn = true;
const isAdmin = false;
const isEditor = true;

// 1. Logical AND (&&)
// Returns true only when both conditions are true.
console.log("true && true:", true && true); // true
console.log("true && false:", true && false); // false
console.log("Is logged in and an admin?", isLoggedIn && isAdmin); // false

// 2. Logical OR (||)
// Returns true when at least one condition is true.
console.log("true || false:", true || false); // true
console.log("false || false:", false || false); // false
console.log("Is logged in or an admin?", isLoggedIn || isAdmin); // true

// 3. Logical NOT (!)
// Reverses a Boolean value: true becomes false and false becomes true.
console.log("!true:", !true); // false
console.log("!false:", !false); // true
console.log("Is the user logged out?", !isLoggedIn); // false

// Four practice questions

// Question 1: Can a person vote if they are at least 18 and a citizen?
// Question 2: a customer can get a discount if they are a student or a senior?
// Question 3: Is the shop closed?
// Question 4: Can a user access the dashboard?
// The user must be logged in and must be either an admin or an editor.

const voterAge = 20;
const isCitizen = true;
console.log("Q1. Can the person vote?", voterAge >= 18 && isCitizen); // true

const isStudent = true;
const isSenior = false;
console.log("Q2. Does the customer get a discount?", isStudent || isSenior); // true

// Question 3: Is the shop closed?
const isShopOpen = false;
console.log("Q3. Is the shop closed?", !isShopOpen); // true

// Question 4: Can a user access the dashboard?
// The user must be logged in and must be either an admin or an editor.
const dashboardUserLoggedIn = true;
const dashboardUserIsAdmin = false;
const dashboardUserIsEditor = true;
console.log(
  "Q4. Can the user access the dashboard?",
  dashboardUserLoggedIn && (dashboardUserIsAdmin || dashboardUserIsEditor),
); // true
