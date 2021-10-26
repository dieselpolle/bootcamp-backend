const mysql = require('mysql');
const dotenv = require('dotenv');
dotenv.config();
const connection = mysql.createConnection(process.env.SQL_SERVER);
module.exports = connection;