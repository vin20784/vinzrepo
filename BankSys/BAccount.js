
class Account {

    constructor(AccNumber, AccHoldName, balance, transaction) {

        if (this.constructor == Account) {
            throw new Error("Abstract classes can't be instantiated.");
        }
        this.AccNumber = AccNumber;
        this.AccHoldName = AccHoldName;
        this.balance = balance;
        this.transaction = transaction;
    }
    deposit(AmtDep) {
        //throw new Error("Method 'deposit()' must be implemented.");
        //balance += AmtDep;
        this.balance += AmtDep;
    }

    withdraw(AmtWithdraw) {

    }
};


module.exports.bAcc = Account;

let obj = new Account(908,'foo',678,'ko');




