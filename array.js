const cars = ["saab", "volvo", "maruti"];
// console.log(cars);
cars[0] = "opel";
// console.log(cars);
const fruits = ["apple", "mango", "pineapple", "banana"];
console.log(Array.isArray(fruits));
fruits.shift(); //shift remove the first array element
fruits.unshift("lemon");//adds element at the beginning
// let length = fruits.length;
// console.log(fruits.pop());
console.log(fruits);
// const fruit = fruits.sort();
const fruit = fruits.reverse();

console.log(fruit);
// console.log(length);
// console.log(fruits[0]);
const person = ["John", "Doe", 46];
// console.log(person);
// const myArr = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
// ];
// const newArr = myArr.flat();
// console.log(newArr);
const myarray=[1, 2, 3, 4, 5, 6];
const newarr=myarray.flatMap(x=>[x,x*10]);
console.log (newarr);

