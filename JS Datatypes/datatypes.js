// JS Data Types

// 1. Primitive Data Types
// a. Number - 42, 3.14
// b. String - "Hello, World!"
// c. Boolean - true or false
// d. Undefined - variablw with no assigned value
// e. Null - an intentional empty value

// 2. Reference Data Types
// a. Object - key-value pairs - {name: "Alice", age: 30}
// b. Array -  ordered list of values - [1, 2, 3, 4, 5]
// c. Function - reusable block of code - function greet() {};

// copy behavior
// Primitive types are copied by value
let a = "Kalvi";
let b = a; // b gets a copy of the value in a
b = "Kalvium"; // changing b does not affect a
console.log(a); // Output: Kalvi
console.log(b); // Output: Kalvium

// Reference types are copied by reference
let obj1 = { name: "Kalvi" };
let obj2 = obj1; // obj2 references the same object as obj1
obj2.name = "Kalvium"; // changing obj2 affects obj1
console.log(obj1.name); // Output: Kalvium
console.log(obj2.name); // Output: Kalvium

let arr = [1, 2, 3];
let arr2 = arr;
arr2.push(4); // modifying arr2 affects arr
console.log(arr); // Output: [1, 2, 3, 4]
console.log(arr2); // Output: [1, 2, 3, 4]