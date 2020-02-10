var bigB = { name: 'Amitabh', surname: 'Bachchan' }

var smallB = Object.create(bigB);
smallB.name = 'Abhishek';

var babyB = Object.create(smallB);
babyB.name = 'Aardhya';

console.log(babyB.name, babyB.surname);
console.log(babyB);