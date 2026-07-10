//!literal way
let a=["abhinav","karthik","kaushik","majid","shoaib"];
console.log(a);
a[1]="dkk";
a[0]="abhi";
a[2]="mky";
a[3]="mujahid";
a[4]="shakun";
console.log(a[2]);
console.log(a.length);
console.log(a);
delete a[a.length-1];
console.log(a);

//! constructor way
let emp=Array();
console.log(emp);
emp[0]="smith";
emp[1]="male";
console.log(emp);

// constructor with new
let p=new Array();
p[0]=12;

// ****** array functions ******  //

// push
a.push("ram","lakan");
console.log(a);

// pop
a.pop();
console.log(a);

// unshift
a.unshift("kk","mohankrishnayadav");
console.log(a);

// shift
a.shift();
console.log(a);

// splice
a.splice(2,1);
console.log(a);
a.splice(4,2,"venu","akash");
console.log(a);

// reverse
a=a.reverse();
console.log(a);

// slice
console.log(a.slice(1,3))
// n-1 array where a,n 

// return values 
// pop() array last value
// push() updated length of the array
// slice() subarray
// reverse() reverse array
// splice() deleted subarray
// shift() updated length of the array

//! other functions
// concat()
// join()
// indexof()
// lastIndexof()
let w=[1,2,3,4,5,6]
let e=["a","b","c","d","e","f"]
let r=[6,7,8]
console.log(w.concat(e,r));
let t=["hi","this","is","kaushik"];
var po=t.join();
console.log(po);
po=t.join("");
console.log(po);
po=t.join(" ");
console.log(po);
po=t.join("@");
console.log(po);

//!concat()
let esal=[2000,3000,45000,3300,5600,8900];
let empNames=["smith","allen","king","james","John","scott"];
let emoids=[100,101,102];
console.log(esal.concat(empNames,emoids));

//!join()
let arr=["hi","welcome","to","the","world","of","qspiders","qspiders","is","the","best","training","institute","qspiders"]
let joinedarr=arr.join();
console.log(joinedarr);

//!indexOf()
console.log(arr.indexOf("qspiders")); //first occurence of the objects

//!lastIndexOf()
console.log(arr.lastIndexOf("qspiders"));   //returns the last occurence of the object

//!Higher order methods
/*
*map()
*filter()
*reduce()
*sort()
*ForEach()
*Some()
*every()
*/

//!map():
//Higher order methods of array
// allow us to perform common logic in each array element
// as it is higher order it will accept callback fun as argument
// returns updated array 
let cart=[200,1000,999,545,700,3000];
let res= cart.map((price)=>{
    return price+10;
});
console.log(cart); //original values
console.log(res);  //updated values

//!forEach()
let res1=cart.forEach((price)=>{   
    return price+10;
});
    console.log(res1);



