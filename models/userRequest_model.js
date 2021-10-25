const db = require('../database');

const userRequest = {
  add: function(userRequest, callback) {
    return db.query(
      'insert into user (username,password,email,allowed) values(?,?,?,?)',
      [user.email, null, user.email,null],
      callback
    );
  }
}
module.exports = userRequest;