var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
//const basicAuth = require('express-basic-auth');
const userRouter = require('./routes/user');
const requestAuthRouter = require('./routes/requestAuth');
const requestIpAddrRouter = require('./routes/ipAddr');
//const authUser = require('./authUser');

var app = express();

app.use(helmet());
app.use(cors());
//app.use(basicAuth( { authorizer: authUser, authorizeAsync:true, } ));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/user', userRouter);
app.use('/requestAuth', requestAuthRouter);
app.use('/ipAddr', requestIpAddrRouter);

module.exports = app;