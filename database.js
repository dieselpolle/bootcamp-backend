const mysql = require('mysql');
var myConnectionString;
if(process.env.SQL_SERVER === undefined){
  myConnectionString = "mysql://bootUser:bootPass@localhost:3306/bootcamp_demo_db";
}
else {
  myConnectionString=process.env.SQL_SERVER;
}
const connection = mysql.createConnection(myConnectionString);

module.exports = connection;