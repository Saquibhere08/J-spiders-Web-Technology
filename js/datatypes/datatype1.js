//! DataTypes - how to define it?
let a=5; //datatype: int
console.log(a);

a="Saquib";  //datatype: String
//NOTE: js is a loosely-typed Programming language: We can update from one datatype to any other datatype
console.log(a);


//! TO FIND THE DATATYPE - typeOf(variable)
//it is used to find what type of data stored.
//?Example 1
a=66;
console.log(typeof(a));
a="Saquib";
console.log(typeof(a));
a=true;
console.log(typeof(a));

//?Example 2
let b;
console.log("b: ",b);  //undefined, as b varible is not initialized.
b=0;
console.log("b: ",b);  //0
b=null;
console.log("b: ",b); //null

//?Example 3:
let v1=12;
console.log(v1+1);    //13
let v2="12";
console.log(v2+1);  //121

//?Example 4:
let abc=123;
let res=String(abc);    //it converts into String

//?Example 5:
let name="saquib";
console.log(name);  //Saquib
console.log(typeof(name));  //String

name="12";
name=Number(name);
console.log(name);  //12
console.log(typeof(name));  //Number

name=Boolean(name);
console.log(name);  //true
console.log(typeof(name));  //boolean

