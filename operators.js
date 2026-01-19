// spread operator =>used to expand elements of array,objects or string into different individual elements. (spread bhaneko ...)

const arr1 = [1, 2, 3];
const spread = [...arr1, 4, 5, 6];
console.log(spread);

const obj = { name: "Nayen", age: 19 };
const spreads = { ...obj, country: "Nepal", sex: "male" };
console.log(spreads);

function sum(a, b, c) {
  return a + b + c;
}
// console.log(Sum(2, 3, 4));

const numbers = [1, 2, 3];
console.log(sum(numbers[0], numbers[1], numbers[2]));
console.log(sum(...numbers));

//Rest operator =>used to collect multiple elements into a single array or object.Usually used in function parameters or destructuring.  (symbol=...)

// Feature	       Spread (...)	                                 Rest (...)
// Usage.      	Expands elements	                         Collects elements
// Context       	Arrays, objects, function calls	             Function parameters,   destructuring
// Example	[...arr1, ...arr2]	                                 function(...args)
