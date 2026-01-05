const numbers = [1, 2, 3];

const first = numbers[0];
const second = numbers[1];
const third = numbers[2];

console.log(first);
console.log(second);

const [a = 1, , c = 2, d = 3] = numbers;
console.log(a, c, d);

let x = 10;
let y = 20;
[x, y] = [y, x];
console.log(x, y);

const user = [
  {
    name: "ANil",
    age: 20,
  },
];
