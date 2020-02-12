var common = require('./Account');
common.acc.deposit(100);
common.acc.withdraw(50);
common.acc.printbal();

var obj = new common.empr(1, 'vinz', 1000);
console.log(obj.name);
