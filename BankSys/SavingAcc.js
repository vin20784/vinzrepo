
const accB = require('./BAccount');

//let obj = new accB.bAcc();
//obj.deposit(34);

class SavingAcc extends accB.bAcc {

    constructor(AccNumber, AccHoldName, balance, transaction) {
        super(AccNumber, AccHoldName, balance, transaction);
        this.minBal = 100;// min bal 100 rs

    }
<<<<<<< HEAD

=======
    
>>>>>>> fe182c38523f90d1c1d6647dfa6b0681e7f23a01
    withdraw(AmtWithdraw) {

    }

};

//let obj = new accB.bAcc(908,'foo',678,'ko'); //abstract calss cannot be instantiated
let SAcc = new SavingAcc(26354, 'vinz', 10000);

console.table(SAcc);

SAcc.deposit(50);
console.table(SAcc);

