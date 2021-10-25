const db = require('../database');

const userRequest = {
  add: function(user, callback) {
    return db.query(
      'insert into user (username,password,email,allowed) values(?,?,?,?)',
      [user.username, user.password, user.email,null],
      callback
    );
  },
  
module.exports = userRequest;