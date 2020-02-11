function add(a, b) {

    var c = a + b;
    //console.log("printing argument object " + arguments[0]);
    //console.log(arguments[1]);
    console.table(arguments);

    return c;
}


function main() {
    var z = add(5, 7);
    return z;

}

var val = main();
console.log(val);


// this part of code is for default paramter 
function greet(name = "js master") {
    console.log("Welcome mr." + name);
}

greet("Jagathish"); // Welcome mr.Jagathish
greet(); //Welcome mr.noob master
greet(""); //Welcome mr.


