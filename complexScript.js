// filename: complexScript.js
// This code is a complex script that demonstrates various advanced JavaScript concepts and techniques.

// Define a class to represent a person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  }
}

// Extend the Person class to create a Student subclass
class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }

  study() {
    console.log(`${this.name} is studying ${this.major}.`);
  }
}

// Create some instances of the Person and Student classes
const person1 = new Person("John", 25);
const person2 = new Person("Alice", 30);
const student1 = new Student("Bob", 21, "Computer Science");
const student2 = new Student("Jane", 23, "Mathematics");

// Demonstrate class inheritance and method overriding
person1.greet();          // Output: Hello, my name is John and I'm 25 years old.
student1.greet();         // Output: Hello, my name is Bob and I'm 21 years old.
student1.study();         // Output: Bob is studying Computer Science.

// Define a function that demonstrates closures and currying
function add(a) {
  return function(b) {
    return a + b;
  };
}

const add5 = add(5);      // Partial application of add function
console.log(add5(3));    // Output: 8

// Implement a recursive function to calculate the factorial of a number
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  
  return n * factorial(n - 1);
}

console.log(factorial(5));  // Output: 120

// Use array methods to manipulate and transform data
const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map((num) => num * 2);
console.log(doubledNumbers);  // Output: [2, 4, 6, 8, 10]

const sum = numbers.reduce((accumulator, num) => accumulator + num, 0);
console.log(sum);             // Output: 15

// Implement a Promise-based asynchronous function
function asyncAdd(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a !== "number" || typeof b !== "number") {
        reject(new Error("Invalid arguments: numbers expected."));
      }
      
      resolve(a + b);
    }, 1000);
  });
}

asyncAdd(2, 3)
  .then((result) => console.log(result)) // Output: 5
  .catch((error) => console.error(error));

// Define and use an async function with the `await` keyword
async function performAsyncTask() {
  try {
    const result = await asyncAdd(10, 20);
    console.log(result);  // Output: 30
  } catch (error) {
    console.error(error);
  }
}

performAsyncTask();