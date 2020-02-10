var emp =
{
    id: 1,
    name: 'vnc',
    print: function () { console.log("hello inside") },
    printme: function () {
        console.log(
            "my id is " + this.id + " " +
            "my name is " + this.name + " "
        )
    }

};
console.log(emp);
emp.id = 5
console.log(emp.id, emp.name);
emp.func2 = function () { console.log(" test 2 function ") };
emp["name"] = 'xyz'
console.log(emp.id, emp.name);

emp.print();
emp.func2();
emp.printme();