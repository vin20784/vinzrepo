<<<<<<< HEAD
=======

>>>>>>> fe182c38523f90d1c1d6647dfa6b0681e7f23a01
class Account {

    constructor(AccNumber, AccHoldName, balance, transaction) {

<<<<<<< HEAD
=======
        if (this.constructor == Account) {
            throw new Error("Abstract classes can't be instantiated.");
        }
>>>>>>> fe182c38523f90d1c1d6647dfa6b0681e7f23a01
        this.AccNumber = AccNumber;
        this.AccHoldName = AccHoldName;
        this.balance = balance;
        //this.transaction = transaction;
    }
    deposit(AmtDep) {
<<<<<<< HEAD
=======
        //throw new Error("Method 'deposit()' must be implemented.");
        //balance += AmtDep;
>>>>>>> fe182c38523f90d1c1d6647dfa6b0681e7f23a01
        this.balance += AmtDep;
    }
    withdraw(AmtWithdraw) {
        
    }
};


module.exports.bAcc = Account;

let obj = new Account(908,'foo',678,'ko');




