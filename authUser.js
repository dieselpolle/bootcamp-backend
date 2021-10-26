module.exports = function authAPI(username, password, cb){
    const dotenv = require('dotenv');
    dotenv.config();
    if (username === process.env.auth_user && password === process.env.auth_pass) {
        return cb(null, true);
    }
    else {
        return cb(null, false);
    }
}