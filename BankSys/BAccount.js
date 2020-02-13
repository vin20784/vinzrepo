class Account {

    constructor(AccNumber, AccHoldName, balance, transaction) {

        this.AccNumber = AccNumber;
        this.AccHoldName = AccHoldName;
        this.balance = balance;
        //this.transaction = transaction;
    }
    deposit(AmtDep) {
        this.balance += AmtDep;
    }
    withdraw(AmtWithdraw) {
        
    }
};


module.exports.bAcc = Account;




