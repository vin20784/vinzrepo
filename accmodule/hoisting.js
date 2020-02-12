// ic reate 3 IIFE functions to  test HOIsting
//check global var
/*
(function dosmthng1() {
    x = 5;
    console.log(x);
})();

// do not use hoisiting

(function dosmthng2() {

    x = 10;
    console.log(x);

    var x;
})();

// use let instead of var
(function dosmthng3() {
    x = 15;
    console.log(x);
    var x = 5; // this will hoistuse let instead
    //let x; // this will show error , as it anchors the x and not hoist it by default
})();
*/
// const 
// scope of var is not till end of block , but end of function 
// var is property of the object 
// it dies with object : as function is object
// const is like let  : i .e const let

(function dosmthng4() {

    var a = 1;
    if (a == 1) {
        var x = 10;
        let y = 15;
        const z = 20;
        console.log(x);
        console.log(y);
        console.log(z);

    }
    console.log(x);
    console.log(y);
    console.log(z);
})();
