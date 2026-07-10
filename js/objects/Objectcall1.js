let cutomer1={
    name:'John',
    cart:[
        {id:1, title:'watch', price : 2599 , quantity:2},
        {id:2, title: 'laptop',price:96000, quantity:2},
        {id:3, title: 'car', price:450000,quantity:1}

    ]
}
let cutomer2={
    name:'Sam',
    cart:[
        {id:1, title:'watch', price : 3599 , quantity:2},
        {id:2, title: 'laptop',price:96000, quantity:2},
        {id:3, title: 'Bike', price:544453,quantity:1}

    ]
}
let cutomer3={
    name:'Max',
    cart:[
        {id:1, title:'watch', price : 6599 , quantity:2},
        {id:2, title: 'laptop',price:45000, quantity:2},
        {id:3, title: 'Camel', price:2500230,quantity:1}

    ]
}

function totalPrice(){
    let cartProducts=this.cart;
    let price=cartProducts.reduce((prev,next)=>prev + next.price
    * next.quantity,0)
    console.log(`${this.name}total price is ${price}`);
    
}
totalPrice.call(cutomer1);
totalPrice.call(cutomer2);
totalPrice.call(cutomer3);
