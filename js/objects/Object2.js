//!this keyword -- Example 2
let person={
    name:'John',
    id:101,
    address:{
        area: function(){
            console.log(`${this.name} address is Punjagutta and pincode is ${this.pincode}`);
        },
        pincode: 500003

    }
}
person.address.area();
// console.log(this);


