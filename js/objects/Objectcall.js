let person1 = {
  name: "Sirisha",
  course: "JFS",
  area: "Ameerpet",
};

let person2 = {
  name: "Vaishnavi",
  course: "JFS",
  area: "Punjagutta",
};

let person3 = {
  name: "Kumud",
  course: "JFS",
  area: "Ameerpet",
};

//! common function to call the multiple objects
function printDetails() {
  console.log(`${this.name} course is ${this.course} and area is ${this.area}`);
}

// printDetails();

//! call()
printDetails.call(person1);
printDetails.call(person2);
printDetails.call(person3);

//! apply() - same as call() but extra arguments must be in array
printDetails.apply(person1,[7342932]);
printDetails.apply(person2,[9334239]);
printDetails.apply(person3,[3242931]);

//! bind() 
let boundFun1=printDetails.bind(person1);
boundFun1(8723912);

let boundFun2=printDetails.bind(person2);
boundFun2(29329302);

let boundFun3=printDetails.bind(person3);
boundFun3(29323021);