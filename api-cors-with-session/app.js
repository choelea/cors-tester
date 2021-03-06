var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var hbs = require('hbs');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
const cors = require('cors');
var viewHistory = require('./routes/viewhistory');
var index = require('./routes/index');
var session = require('express-session')

var app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

const corsOption = {
  "origin": /\.jiu-shu\.com$/, //jiu-shu.com 的所有子域名
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "optionsSuccessStatus": 204,
  "allowedHeaders":"X-Csrf-Token, X-Requested-With",
  "credentials":true,
  "maxAge":3600  //一个小时内预检一次就OK啦
};
app.use(cors(corsOption));
app.set('trust proxy', 1)
app.use(session({ secret: 'secretkey', resave: false, saveUninitialized: false })); 
// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/viewhistories', viewHistory);
app.use('/', index);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
