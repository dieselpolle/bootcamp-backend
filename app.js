var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();

//
// Enabling basic authentication and environment variables
//
const basicAuth = require('express-basic-auth');
app.use(basicAuth( { authorizer: authAPI, authorizeAsync:true, } ))
const dotenv = require('dotenv');
dotenv.config();

//
//username and password are needed when using REST API, uses basic authentication
//
function authAPI(username, password, cb){
    if(username===process.env.auth_user && password ===process.env.auth_pass){
        return cb(null, true);
    }
    else{
        return cb(null, false);
    }
}

const userRouter = require('./routes/user');
const helmet = require('helmet');
const cors = require('cors');

app.use(helmet());
app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/user', userRouter);

module.exports = app;
