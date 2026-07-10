let student1 = {
  name: "Allen",
  course: "Cybersecurity",
  marks: [55,90,63]
}

let student2 = {
  name: "Miller",
  course: "SECops",
  marks: [75,66,43]
  
}

let student3 = {
  name: "Williams",
  course: "DEVops",
  marks: [95,90,73]  
};

function printMarks(){

    let marks=this.marks.reduce((prev,next)=> prev+next,0)
    console.log(`${this.name} total marks: ${marks}`);
    
}
printMarks.call(student1);
printMarks.call(student2);
printMarks.call(student3);