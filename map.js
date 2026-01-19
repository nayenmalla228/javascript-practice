const numbers = [1, 2, 3, 4, 5];

const double = numbers.map((n) => n * 2);

console.log(numbers);
console.log(double);

const user = [
  {
    name: "anil",
    age: 20,
    surname: "ghimire",
  },
  {
    name: "Nayen",
    age: 23,
    surname: "malla",
  },
];
const name = user.map((u) => u.name);
console.log(name);

const even = numbers.filter((n) => n % 2 === 0);
console.log(even);

const greater = user.filter((n) => n.age > 20);
console.log(greater);

//syntax of reduce

//Array.reduce(accumulator,currentValue)=>{},initialValue;

const total = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(total);
// hw calculate the total of the age using reduce
