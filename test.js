//var g_a =1;
//g_b =2;

function add(a, b) {
    var c = a + b;
    return c;
}

function subtract(a, b) {
    var c = a - b;
    return c;

}

function multiply(a, b) {
    var c = a * b;
    return c;
}

function divide(a, b) {
    var c = a / b;
    return c;
}


var x = 5;
var y = 7;
var addresult = add(x, y);
x = 8; y = 0;
var subresult = subtract(x, y);
x = 9; y = 0;
var mulresult = multiply(x, y);
x = 18; y = 0;
var divresult = divide(x, y);

console.log(addresult);
console.log(subresult);
console.log(mulresult);
console.log(divresult);