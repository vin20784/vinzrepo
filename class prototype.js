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

var emp1 = new Emperor(3, 'veju', 500);
var mgr1 = new mgr(2, 'vins', 20000, 10000);


console.table(mgr1);
console.table(emp1);

//var e = new Emp2(2, "hello");

//var f = new Emp();

