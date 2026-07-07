//!this keyword -- Example 3
let person={
    name:'John',
    id:101,
    address:{
        area: ()=>{
            console.log(this);  //window
            console.log(`${this.name} address is Punjagutta and pincode is ${this.pincode}`);
            console.log(this.innerHeight);
            console.log(this.innerWidth);
            
        },
        pincode: 500003
    }
}
person.address.area();
// console.log(this);


