//addition using function
function add(a, b) {
  return a + b;
}
const sum = add(10, 19);
console.log(sum);

//substraction using function

function sub(c, d) {
  return c - d;
}
const subs = sub(10, 2);
console.log(subs);

const multiply = (a, b) => {
  //arrow function
  return a * b;
};
const product = multiply(5, 2);
console.log(product);

const division = (a, b) => a / b;
console.log(division(50, 25));

function isEven(num) {
  return num % 2 === 0;
}
console.log(isEven(17));

// a = b;
// a == b; '10'=10
// a === b; '10'=10
//to find the largest number

function isLargest(a, b, c) {
  return Math.max(a, b, c);
}
console.log(isLargest(10, 20, 30));

// area of circle

// function area(r) {
//   return (22 / 7) * r * r;
// }

const area = (r) => 3.14 * r * r;
console.log(area(3).toFixed(2));

//Math function

//function calculateDiscount()

// price=1000,discount %=10 ,price after discount=?
//const priceAfterDiscount= calculateDiscount(2000,5)
// console.log(`The price of object after discount is ${priceAfterDiscount}`)
//arrow function and normal function

function calculateDiscount(MarkedPrice, DisPercent) {
  return (calculateDiscount = (DisPercent / 100) * MarkedPrice);
}
console.log(calculateDiscount(2000, 10));

//price after discount
function priceAfterDiscount(MP, DisPercent) {
  return MP - (DisPercent / 100) * MP;
}
console.log(
  `The price of object after discount is ${priceAfterDiscount(2000, 20)}`
);

//using arrow function
const priceAfterDiscounts = (MP, DisPER) => MP - (DisPER / 100) * MP;
console.log(priceAfterDiscounts(3000, 10));
