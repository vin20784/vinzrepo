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

// spread operator

// spread operator doing the concat job 
let arr = [1, 2, 3];
let arr2 = [4, 5];

arr = [...arr, ...arr2];
console.log(arr); // [ 1, 2, 3, 4, 5 ] 


// math object in JS
// min in an array using Math.min() 
let arrmath = [1, 2, 3, -1];
console.log(Math.min(1, 3, 4, 5, -3)); //-3  
console.log(Math.min(arrmath)); //NaN 


// this part of code is for default paramter 
function greet(name = "js master") {
    console.log("Welcome mr." + name);
}

greet("Jagathish"); // Welcome mr.Jagathish
greet(); //Welcome mr.noob master
greet(""); //Welcome mr.


