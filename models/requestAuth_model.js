const db = require('../database');

//This is open interface to add emails into user table.
//This is used in frontend for requesting username and password for a new user.
//
//A implementation for some kind of prevention of mass requests should be here also...?
const requestAuth = {
  add: function (ip, user, callback) {
    if (db.query('select * from user where ip values(?)'), [ip], callback) {
      return({"error":"You cannot send multiple request from same source at the moment."});
    }
    else return db.query(
      'insert into user (username,email,ip) values(?,?)',
      [user.email, user.email, ip],
      callback
    );
  }
};
module.exports = requestAuth;