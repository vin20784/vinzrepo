function Employee(id, name) {
    this.id = id;
    this.name = name;

    Employee.prototype.setSalary = function (sal, curr) {
        this.salary = sal;
        this.currency = curr;
        //        this.name = curr;
    }

    Employee.prototype.print = function () {
        console.log(" ");
        console.log("ID: ", this.id, "NAME: ", this.name)
        console.log("SALARY: ", this.salary);
    }

}

function Manager(id, name) {
    Employee.call(this, id, name);

    Manager.prototype.setPerks = function (perks) {
        this.perks = perks;
    }

    Manager.prototype.setSalary = function (sal, curr) {
        Employee.prototype.setSalary.call(this, sal, curr);

    }

    Manager.prototype.print = function () {
        Employee.prototype.print.call(this);
        console.log("PERKS: ", this.perks);
        console.log(" ");
    }

}

function computeHash() {
    this.hash = Math.floor(Math.random() * Math.floor(1000));
}

var _bill = new Manager(6884, 'Bill Gates');
_bill.setSalary("265L", "USD");
_bill.setPerks("5L");
_bill.print();
computeHash.call(_bill);

var _steve = new Employee(3512, 'Steve Jobs');
_steve.setSalary("165L", "USD");
_steve.print();

console.table(_bill);
console.table(_steve);

