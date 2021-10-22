const mysql = require('mysql');
var myConnectionString;
const connection = mysql.createConnection(process.env.SQL_SERVER);
module.exports = connection;