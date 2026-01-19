// 🧩 Level 1: Basic Logic Practice
// Task: Grading System
// Ask students to write a function getGrade(marks) that:
// Takes marks (0–100) as input.
// Returns grades like:
// A for 90+,
// B for 80–89,
// C for 70–79,
// D for 60–69,
// F for below 60.
// Use if/else or ternary operators.
// Add a for loop to test it on multiple students.
// ✅
//  Concepts used: variables, if/else, function, loop, ternary operator.

function getGrade(marks) {
  if (marks >= 90) {
    return "A";
  } else if (marks >= 80) {
    return "B";
  } else if (marks >= 70) {
    return "C";
  } else if (marks >= 60) {
    return "D";
  } else {
    return "F";
  }
}
let studentsMarks = [99, 30, 68, 74, 87];
console.log(studentsMarks);

for (let i = 0; i < studentsMarks.length; i++) {
  console.log(
    `Student ${i + 1}:Marks=${studentsMarks[i]},Grade=${getGrade(
      studentsMarks[i],
    )}`,
  );
}

// Level 2: Array + Spread/Rest Practice
// Task: Combine and Sort Marks
// Create two arrays:
// const classA = [50, 60, 70];
// const classB = [65, 75, 80];
// Combine them using the spread operator.
// Write a function that:
// Accepts an array of marks using the rest operator.
// Returns the average mark.
// Use a for loop to calculate the average manually (not with reduce).
// ✅
//  Concepts used: spread, rest, loop, function, variables.

const classA = [10, 20, 30];
const classB = [40, 50, 60];
const combinedMarks = [...classA, ...classB];
console.log(`Combined marks:${combinedMarks}`);

//function using rest operator

function calculateAverage(...marks) {
  let sum = 0;

  for (let i = 0; i < marks.length; i++) {
    // sum += marks[i];
    sum = sum + marks[i];
  }
  return sum / marks.length;
}
const averageMarks = calculateAverage(...combinedMarks);
console.log(combinedMarks);
console.log(averageMarks);

// Level 3: Mini Project — Shopping Cart (Console-based)
// Task: Simple Cart System
// Create an array of products like:
// const products = [
//   { name: "Apple", price: 100 },
//   { name: "Banana", price: 50 },
//   { name: "Mango", price: 80 }
// ];
// Create a function addToCart(cart, product) that adds items to the cart using spread.
// Create a function getTotal(cart) that uses a loop to calculate the total.
// Use a ternary operator to show:
// “You got a discount!” if total > 200
// Else “No discount applied.”
// ✅
//  Concepts used: variables, functions, spread, loops, if/else, ternary.

const products = [
  { name: "apple", price: 100 },
  { name: "Banana", price: 50 },
  { name: "mango", price: 120 },
];
function addToCart(cart, product) {
  return [...cart, product];
}
function getTotal(cart) {
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    total += cart[i].price;
  }
  return total;
}
let cart = [];
cart = addToCart(cart, products[0]);
cart = addToCart(cart, products[1]);
cart = addToCart(cart, products[2]);

console.log("cartitems", cart);
const totalAmount = getTotal(cart);
console.log("totalAmount", totalAmount);

const message = totalAmount > 200 ? "you got discount" : "no discount";
console.log(message);
