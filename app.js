var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const expressLayout = require('express-ejs-layouts');
const session = require('express-session');
const flash = require('connect-flash');
 var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const dotenv = require('dotenv')
dotenv.config()
require("./db/database")

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger(process.env.DEV));
app.use(express.json());
app.use(expressLayout);
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
  secret:process.env.SECRET,
  saveUninitialized: false,
  resave: false
}));
app.use(flash());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('./partials/error/error');
});

module.exports = app;
