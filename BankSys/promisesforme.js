let promise = new Promise(function (resolve, reject) {
    // do a thing, possibly async, then…

    var a = 1;
    if (a == 1) {
        resolve("Stuff worked!");
    }
    else {
        reject(Error("It broke"));
    }
});

promise.then(function (result) {
    console.log(result); // "Stuff worked!"
}, function (err) {
    console.log(err); // Error: "It broke"
});