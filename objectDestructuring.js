//objectDestructuring
//Object destructuring is a clean and short way to extract values from an object and store them in variables.

//without destructuring

//const user={
  //  name:"Nayen",
    //age:23,
    //country:"Nepal",
//};
//const name=user.name
//const age=user.age
//console.log(name);
//console.log(age);

//using object with destructuring
 /*const user={
    name:"Saugat",
    age:23,
    country:"Nepal",


 };
 const{name,age,country}=user;
 console.log(name);*/

 const user = {
  name: "Nayen",
  age: 23
};

const { name: userName, age: userAge } = user;

console.log(userName); // Nayen
console.log(userAge);  // 23

//default values

const student={
    name:"Pratyaksha",
    age:33,

}
const {name,age,country="india"}=student;
console.log(country);

const users={
    names:"banstola",
    address:{
        city:"pokhara",
        zip:22345,

    }
}
const {address:{city,zip}}=users;
console.log(city);


//Real world example
const response={
    status:200,
    data:{
        userId:1,
        namee:"pratsss",

    }
}
const {data:{userId,namee}}=response;
console.log(namee);