// Use console.log to output the document object to the console
console.log(document);

// Variable declaration
// A variable is a container that holds a value. In JavaScript, you can declare variables using the keywords var, let, or const.
// The var keyword was commonly used before 2015, but nowadays, let and const are preferred.
// Here's an example of declaring a variable using the var keyword:
var name = "ayam sapkota";

// Variables declared using var can be redeclared and reassigned:
var name = "John Doe"; // This is valid, but it overwrites the previous value of name
name = "Jane Doe"; // This is also valid, and it changes the value of name

// Variables declared using let and const cannot be redeclared, but they can be reassigned:
let age = 20; // can change the value later with const keyword
age = 21; // This is valid, and it changes the value of age
//let age = 22; // This is not valid, because age has already been declared

const pi = 3.14; // cannot change the value laater with const keyword
//pi = 3.14159; // This is not valid, because const variables cannot be reassigned
//const pi = 2.718; // This is not valid, because const variables cannot be redeclared

// There are various ways to declare variables in JavaScript, and they all have different scopes and behaviors:
// - Global variables are declared outside of functions and can be accessed from anywhere in the code.
// - Local variables are declared inside functions and can only be accessed from within that function.
// - Block-scoped variables are declared using let or const inside a block of code (e.g. inside an if statement or loop) and can only be accessed from within that block.
// Here are some examples:
var globalVar = "I am global"; // This is a global variable, and it can be accessed from anywhere in the code
function myFunction() {
var localVar = "I am local"; // This is a local variable, and it can only be accessed from within myFunction()
console.log(globalVar); // This is valid, because globalVar is a global variable
console.log(localVar); // This is valid, because localVar is a local variable
}
myFunction();
//console.log(localVar); // This is not valid, because localVar is not defined outside of myFunction()

if (true) {
let blockVar = "I am block-scoped"; // This is a block-scoped variable, and it can only be accessed from within this block
console.log(blockVar); // This is valid, because blockVar is defined inside this block
}
//console.log(blockVar); // This is not valid, because blockVar is not defined outside of the block

// Variables in JavaScript can hold different types of values, such as numbers, strings, and objects:
var num = 42; // This is a number
var str = "Hello, world!"; // This is a string
var obj = { name: "John", age: 30 }; // This is an object

// You can also declare variables without assigning a value to them:
var uninitializedVar; // This is a variable that has been declared but not initialized (i.e. it has no value)
//console.log(uninitializedVar); // This will output "undefined" to the console, because uninitializedVar has no value yet

//declaring and using variables is an important part of programming in JavaScript
//. Understanding the different keywords, scopes, and data types is essential for writing effective and efficient code.



Regenerate response
