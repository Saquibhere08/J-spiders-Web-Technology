let account1 ={
    holder:"John",
    balance:4500
}
let account2 ={
    holder:"Miller",
    balance:55000
}
let account3 ={
    holder:"King",
    balance:45000
}

function deposit(amount){
    this.balance+=amount;
    console.log(`${this.holder} balance: ${this.balance}`);
    
}

function debit(amount){
    if(this.balance>=amount)
        this.balance-=amount;
    else
        console.log(`${this.holder} have insufficient balance.`);
        
}

deposit.call(account1,1000);
deposit.call(account2,3000);
deposit.call(account3,1400);

debit.call(account1,90000);