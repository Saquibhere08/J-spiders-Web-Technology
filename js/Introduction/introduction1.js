//! 3 ways to declare a Variable in JavaScript
//1. let keyword
//Example 1
let name="Saquib";

console.log(name);
console.log("My name is",name); 

//Example 2
let age=24;

console.log("My age is",age);

//Example 3
let a=29;
let b=34;

console.log(a+b);   //63

//Use of Semi-colon (;)

console.log(a)  //not mandatory
console.log(a);

let d=66; let r=44  //Here we need to add semi-colon(;) because if we donot it will give error message

//!JS execute in the top-to-bottom manner (line by line approach)
//Example 1 
//2. var keyword
var varName="Feel";
console.log(varName);
varName="sad";
console.log(varName);

//3.const Keyword
const office="ABC";
// office="GBC";    ----> it will provide error message, as it not updatable, (cannot be changed) immutable
console.log(office);



