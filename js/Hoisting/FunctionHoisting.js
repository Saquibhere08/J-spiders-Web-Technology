//!Type Coercion
//!Implicit type Coercion
console.log(10*'2');    //10*2 = 20
console.log(10+ true);  //10+1=11
console.log(false+null);//0+0=0
console.log("5"+2);     //"52"

//!Explicit type Coercion
let a="10";
console.log(typeof a);

let b=Number(a);
console.log(b);
console.log(typeof b);

//!converting a Number - we Use Number()
console.log(Number(true));  //1
console.log(Number(false)); //0
console.log(Number(null));  //0
console.log(Number('hello'));//NaN
console.log(Number(undefined));//NaN
console.log(Number(''));    //0
console.log(Number([10,20,30]));    //NaN
console.log(Number([]));    //0
console.log(Number({}));    //NaN
console.log(Number({name:'John',id:11}));   //NaN

//!Convert to Boolean - we use Boolean()
//Falsy values
//Falsy values are the values that become false when converted to a boolean
//There are only 8 falsy values in Javascript :
//falsy values: false,0,'',-0,null,undefined,NaN,On

//Truthy Values
//Any Value that is not falsy is considered as thruthy
//truthy values - "Hello","0",[],{},1,-1,100,true,function(){},etc - all these are thruthy values.

console.log(Boolean(0));    //false
console.log(Boolean(1));    //true
console.log(Boolean(100));  //true
console.log(Boolean(-100)); //true
console.log(Boolean('hello'));  //true
console.log(Boolean(''));   //false
console.log(Boolean(undefined));//false
console.log(Boolean(null));    //false
console.log(Boolean([10,20,30]));    //true
console.log(Boolean([]));    //true
console.log(Boolean({}));    //true
console.log(Boolean({name:'john'}));    //true

//!Convert to String - We use String()
console.log(String(100));   //100
console.log(String(true));  //true
console.log(String(null));  //null
console.log(String(undefined)); //undefined
console.log(String([1,2,3,4])); //1,2,3,4
console.log(String(NaN));   //NaN

//!Number conversion
//[] - 0        ([] -> '' -> 0)
//'' - 0

//!Boolean 
