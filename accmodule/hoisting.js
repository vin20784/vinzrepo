// ic reate 3 IIFE functions to  test HOIsting
//check global var
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
    //var x = 5; // this will hoistuse let instead
    let x; // this will show error , as it anchors the x and not hoist it by default
})();
