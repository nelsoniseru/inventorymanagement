var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const expressLayout = require('express-ejs-layouts');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session)
const flash = require('connect-flash');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var dashBoardRouter = require('./routes/dashboard');
var productsRouter = require('./routes/products')
var UserState = require("./controller/model/user/userAuthState")
const dotenv = require('dotenv')
dotenv.config()
var check = new UserState()
var db = require("./db/database")

var app = express();

// view engine setup
app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger(process.env.DEV));
app.use(express.json());
app.use(expressLayout);
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(session({
  secret: process.env.SECRET,
  saveUninitialized: false,
  resave: false,
  store: new MongoStore({mongooseConnection:db.mongoClient.connection}),
  cookie: {maxAge:60 * 60 * 1000}
}));

app.use(flash());
const middleware = function(req,res,next){
  res.locals.success= req.flash("success")
  res.locals.errormsg= req.flash("errormsg")
  res.locals.session = req.session
  next()
}

app.all('*', check.getAuthUserDetails,middleware)

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/', dashBoardRouter);
app.use('/', productsRouter);

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
