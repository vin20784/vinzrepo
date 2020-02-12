

class Account {

    constructor(AccNumber, AccHoldName, balance, transaction) {

        /*if (this.constructor == Account) {
            throw new Error("Abstract classes can't be instantiated.");
        }*/
        this.AccNumber = AccNumber;
        this.AccHoldName = AccHoldName;
        this.balance = balance;
        this.transaction = transaction;
    }
    deposit(AmtDep) {
        //throw new Error("Method 'deposit()' must be implemented.");
        //balance += AmtDep;
        console.log("test");
    }

    withdraw(AmtWithdraw) {

    }
};


module.exports.bAcc = Account;




