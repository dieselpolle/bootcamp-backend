const db = require('../database');

//This is open interface to add emails into user table. It does not allow duplicate emails.
//This is used in frontend for requesting username and password for a new user.
//
const requestAuth = {
  add: function (user, callback) {
    date = new Date();
    return db.query(
      'insert into user (username,email,ip,date) values(?,?,?,?)',
      [user.email, user.email, user.ip, date],
      callback
    );
  }
};
module.exports = requestAuth;