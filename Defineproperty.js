function person(name) {

    //this.id = id;
    this.name = name;
    Object.defineProperty(this, "id", { enumerable: true, value: 145, writable: true });
    Object.defineProperties(this, {
        salary: {
            enumerable: false,
            value: 42000,
            writable: false
        },
        perks: {
            enumerable: true,
            value: 2000,
            writable: true
        }
    });

    return this;
}

var person = new person('vinz');
console.table(person);
person.id = 78;
person.perks = 6700;
console.table(person);
//console.log(person.id);


