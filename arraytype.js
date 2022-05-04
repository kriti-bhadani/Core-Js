var a = [45000,56000,23000, 65000,78000,57000,67000,46000,34000,35000,65000];

//traversing above array
a.forEach((element) => {
    console.log(`traversing above array: ${element}`);
})

//Increment everysalary by 5000 and display resultant array
let inc = a.map((element) => element+5000);
console.log(`Increment everysalary by 5000: ${inc}`);

//Display sum of all salaries
let sum = a.reduce((sum1, sum2) => sum1 + sum2 ,0);
console.log(`sum of all salaries: ${sum}`);

//Find 1st salary greater than 60000
let myElement = a.find((element) => element > 60000);
console.log(`1st salary greater than 60000: ${myElement}`);

//Find all salaries greater than 60000
let salary = a.filter((element) => element > 60000);
console.log(`Find all salaries greater than 60000: ${salary}`);


//2nd question
var emp = [
    { name: "Rohit", location: "Mumbai", salary: 25000 },
    { name: "Vikas", location: "Mumbai", salary: 15000 },
    { name: "Ruturaj", location: "Delhi", salary: 23000 },
    { name: "Kumar", location: "Chennai", salary: 55000 },
    { name: "Yash", location: "Mumbai", salary: 45000 },
    { name: "Raj", location: "Delhi", salary: 28000 },
  ];

  // 1. Find and display employee who's location is mumbai and salary is > 20k.

  let m = emp.filter((element) => element.location == 'Mumbai' && element.salary > 20000);
  console.log(m);


  // 2. Add new field named 'active' and it's value will  be true|false based on below condition
  //value:true - location should not be chennai else value:false

emp.map((element) => (element.active ='active' && element.location != 'Chennai'));
console.log(emp);

