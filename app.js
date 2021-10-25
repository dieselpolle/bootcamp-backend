var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();
const helmet = require('helmet');
const cors = require('cors');

app.use(helmet());
app.use(cors());

const userRouter = require('./routes/user');
const userRequestRouter = require('./routes/userRequest');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/user', userRouter);
app.use('/userRequest', userRequestRouter);

module.exports = app;
