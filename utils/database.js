/**
 * @author Dominic
 * @email Dominic.s@skeintech.com
 * @create date 2021-01-11 
 * @modify date 2021-01-23 
 * @desc [description]
 */

var mysql = require('mysql2');


 /**
  * Dot env configuration
  */
 

  var db = mysql.createConnection({
    host:'43.204.221.33',
    user:'root',
    password:'aws@1234',
    database:'node_crud',
    port :3306,
    multipleStatements: true,
    dateStrings: true
});
// check db connection 
db.connect((err)=>{
    if(err) throw err;
    else
    {
        console.log('database connected ....');
    }
});
 
 
 
 module.exports = db
 
 
 