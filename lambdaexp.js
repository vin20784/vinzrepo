function foo(x) { return x * x; }
console.log(foo(5));

var l = (x) => x * x;
//l(6);
console.log(l(6));


// closure : is a scope like global and local in JS
//when external var are accesed in func
var balance = 0;
/*function deposit(amt) {
    balance = 10;
    balance += amt;
    return balance;
}
console.log(deposit(600));
//var balance = 0;
//balance = 100;
console.log(balance);*/

/*function print() {

    var name = 'hi'
    console.log(name);
    return name;

}
print();
*/


//function init() {
var name = 'Mozilla'; // name is a local variable created by init
function displayName() { // displayName() is the inner function, a closure
    console.log(name);
    return displayName; // use variable declared in the parent function
}
displayName();
//}
//init();


