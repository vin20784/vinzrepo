const sqlite3 = require('sqlite3').verbose();
 
// open database in memory
//let db = new sqlite3.Database(':memory:', (err) => {
let db = new sqlite3.Database('cwmsdb.db', (err) => {
  if (err) {
    return console.error(err.message);
  }
  //console.log('Connected to the in-memory SQlite database.');
  console.log('Connected to the cwmsdb SQlite database.');
  console.table(db);
});
 
inserttable(db);
// close the database connection

db.close((err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Close the database connection.');
});


function inserttable (db)
{
    db.run('CREATE TABLE carwsh(name text)');

};
