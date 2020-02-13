
const accC = require('./BAccount');

//let obj = new accB.bAcc();
//obj.deposit(34);

class CurrentAcc extends accC.bAcc {

    constructor(AccNumber, AccHoldName, balance, transaction) {
        super(AccNumber, AccHoldName, balance, transaction);
        this.minBal = 100;// min bal 100 rs

    }
    
    withdraw(AmtWithdraw) {


    }

};

let CAcc = new CurrentAcc(26354, 'vinz', 10000);

console.table(CAcc);

CAcc.deposit(50);

