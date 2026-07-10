//! Important Array Operations
//? array initialization & defination
let arr=[12,8,true,null,"saquib"];
console.log(arr);
console.log("size: ",arr.length);

//? push()
arr.push("king");
arr.push(false);
arr.push(500);
console.log(arr);
console.log("size: ",arr.length);

//? pop()

arr.pop();
arr.pop();
arr.pop();
console.log(arr);
console.log("size: ",arr.length);

//? shift() - it starts from the starting index of an array and remove it.

arr.shift();
arr.shift();

console.log(arr);

//? sort() - it naturally sorts the array in ascending order
let marks=[121,33,490,50,99,1];
console.log(marks);

marks.sort();
console.log(marks);

//? slice() - it will include the first index input upto the last index input but dose'nt include it
let submarks=marks.slice(3,5);
console.log(submarks);

