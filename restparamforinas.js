function add(fpar1, fpar2, ...theRest) {
    console.log("fpar1 = ", fpar1);
    console.log("fpar2 = ", fpar2);

    for (var val of theRest) {
        console.log("printing val .." + val);
    }

    for (var key in theRest) {
        console.log("printing key.." + key);
    }


}
console.log("printing");
add(2, 3, 4, 6);
console.log("printing");
add(1);
console.log("printing");
add(78, 56, 89, 34, 5, 6);
