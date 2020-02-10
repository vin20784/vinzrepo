function Emp(id, name) {
    this.id = id;
    this.name = name;
    this.printme = function () { console.table("construction complete" + " id is " + this.id + "name is " + this.name) };

    Emp.count = 56; // static var : not accesible to vinayak 

    Emp.prototype.salary = 1000;

    var vinz = 10;

    function printwhatever() { console.log(vinz); } // local function

}

//var bredon = new Emp(2, 'brendon');
var vinayak = new Emp.prototype.constructor(3, 'vinayak');
// same as above
var vinayak = new Emp(3, 'vinayak');
//same?




//vinayak.salary = 100000;

//bredon.printme();
//vinayak.printme();
console.table(vinayak);
//console.log(vinayak);
console.log(vinayak.salary);

console.table(Emp.prototype);
console.table(vinayak.__proto__); // goes to prototype object 

console.log(vinayak.__proto__.constructor.count);
//printwhatever();
//console.table(bredon);

