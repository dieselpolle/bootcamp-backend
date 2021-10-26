const db = require('../database');

const requestAuth = {
  add: function (user, callback) {
    return db.query(
      'insert into user (username,email) values(?,?)',
      [user.email, user.email],
      callback
    );
  }
};
module.exports = requestAuth;