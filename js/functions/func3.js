//?Functions
//function def
function sum(a,b){
    result=a+b;
    console.log(result);
    
}
//function call
sum(10,20);

//?==========Example1==================
function greet(){
    msg = "Hello, Good Morning!"
    console.log(msg);
}
greet();

//?============Example2===============
function greetbyName(userName){
    msg = "Hello, Good Morning! "+userName
    console.log(msg);
}
greetbyName("Saquib Bin Halim");

//?=========Example 3========================
//!SimpleCalculator
function add(a,b){
    return a+b;
}

function sub(a,b){
    return a-b;
}

function div(a,b){
    return a/b;
}

function mul(a,b){
    return a*b;
}

//print
console.log(add(32,54));
console.log(sub(45,45));
console.log(div(32,4));
console.log(mul(3,3));

