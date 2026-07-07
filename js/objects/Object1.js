//!this keyword -- Example 1
let person={
    name:'John',
    id:101,
    address: function(){
            console.log(`${this.name} address is Punjagutta`);   
        }
    }
person.address();