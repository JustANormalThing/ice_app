var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
//var mongoose = require('mongoose');
var session = require("express-session")
var Ice_ = require("./models/ice_").Ice_
//mongoose.connect('mongodb://localhost/ice_');
var mysql2 = require('mysql2/promise');
var MySQLStore = require('express-mysql-session')(session);



var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var iceRouter = require('./routes/ice2_');


var app = express();

var options = {
  host : '127.0.0.1',
  port: '3306',
  user : 'sqluser',
  password : 'password',
  database: 'ice_'
  };
var connection = mysql2.createPool(options)
var sessionStore = new MySQLStore( options, connection);


// view engine setup
app.engine('ejs',require('ejs-locals'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use(session({
  secret: 'ice_',
  key: 'sid',
  store: sessionStore,
  resave: true,
  saveUninitialized: true,
  cookie: { path: '/',
  httpOnly: true,
  maxAge: 60*1000
  }
  }));
//var MongoStore = require('connect-mongo');
//app.use(session({
 // secret: "ice_",
  //cookie:{maxAge:60*1000},
 // resave: true,
 // saveUninitialized: true,
 // store: MongoStore.create({mongoUrl: 'mongodb://localhost/ice_'})
 // }))  
  app.use(function(req,res,next){
    req.session.counter = req.session.counter +1 || 1
    next()
    })
    
app.use(require("./middleware/createUser.js"))
app.use(require("./middleware/createMenu.js"))
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/ice_', iceRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error', {title:"Неут льда"});
});


module.exports = app;





