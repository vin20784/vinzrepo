var accountnumber = '207845';
var holdername = 'vinz';
var balance = 00000;

class Emperor {

    constructor(id, name, salary) {

        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    


}

//is same as that of 
class mgr {
    constructor(id, name, salary, perks) {
        //this.id = id;
        //this.name = name;
        //this.salary = salary;
        Emperor.constructor.call(this, id, name, salary);
        this.perks = perks;
    }
}

module.exports.empr = Emperor;

module.exports.acc =
{
    deposit: function (amt) {
        balance += amt;
        console.log(balance);
    },
    withdraw: function (amt) {

        balance -= amt
    },
    printbal: function () {
        console.log(balance);

    }
};



