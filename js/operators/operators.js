//!Arithmetic Operator
console.log(100-200);   //-100
console.log(100-"hello");   //NaN

//Note: NaN = Not a Number
console.log(10-undefined);  //NaN
console.log(10-"hello");    //NaN

//!Relational Operator(<,>,<=,>=,===,==,!=.!==)


//!Assignment Operator(=,+=,-=,*=)
//NaN is not equal to itself
console.log(NaN==NaN);      //false
console.log(10==10);    //true

let a=5;
a+=2;
console.log(a); //7

//!Equality Operator
console.log(10==10);    //true
console.log(9=="9")   //false
console.log(true==1);   //true
//!Strictly Equality Operator
console.log(true===1);   //false
console.log(10===10);   //true
console.log(9==="9");   //false 

//!Logical Operators
//eg.1 AND / OR Logical Operators Examples: 
a=10;
let b=20;
let c=(a==b) && (b>a) || (a<b);
console.log(c); //true

//eg.2 AND / OR Logical Operators Examples: 
console.log((10=="10")&&("hi"=="HI")||(true==1));   //true

//!Bitwise Operator
console.log(10 & 20);
console.log(10 | 20);

//!Unary  Operator
//pre inc - first increase the value by 1 and use
//post inc - first use the value and then increase by 1
//pre-dec - first decrease the value by 1 and use
//post-dec - first use the value and then decrease by 1
a=7;    //8,9
b=5;    //6,7
console.log(a++ + ++b - ++a + b++); //10
console.log(a); //9
console.log(b); //7

//!Ternary Operator
a>b?console.log(a):console.log(b);

//!typeOf Operator
console.log(typeof 100);    //number
console.log(typeof "hello");    //strig
console.log(typeof true);   //boolean
console.log(typeof "true"); //string
console.log(typeof null);   //object
console.log(typeof undefined);  //undefined
console.log(typeof NaN);    //number
console.log(typeof [1,2,3]);    //object


