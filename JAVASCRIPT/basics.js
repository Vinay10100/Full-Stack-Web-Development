// Variables and data types
let name = 'John';
const age = 25;
var isStudent = true;

console.log(name);
console.log(age);
console.log(isStudent);

// Arithmetic operations
let num1 = 10;
let num2 = 5;

let sum = num1 + num2;
let difference = num1 - num2;
let product = num1 * num2;
let quotient = num1 / num2;

console.log(sum);
console.log(difference);
console.log(product);
console.log(quotient);

// Conditional statements
let temperature = 30;

if (temperature > 30) {
console.log('It is a hot day');
} else if (temperature >= 20 && temperature <= 30) {
console.log('It is a pleasant day');
} else {
console.log('It is a cold day');
}

// Loops
for (let i = 0; i < 5; i++) {
console.log('Loop iteration:', i);
}

let counter = 0;
while (counter < 5) {
console.log('While loop iteration:', counter);
counter++;
}

// Functions
function greet(name) {
console.log('Hello, ' + name + '!');
}

greet('Alice');

function addNumbers(num1, num2) {
let sum = num1 + num2;
return sum;
}

let result = addNumbers(3, 7);
console.log('Sum:', result);

// Arrays
let fruits = ['apple', 'banana', 'orange'];
console.log(fruits);
console.log(fruits[1]);

fruits.push('grape');
console.log(fruits);

fruits.pop();
console.log(fruits);

// Objects
let person = {
name: 'John',
age: 25,
isStudent: true
};

console.log(person.name);
console.log(person.age);
console.log(person.isStudent);
