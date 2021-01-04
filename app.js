const { CLIENT_RENEG_LIMIT } = require('tls');
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var app = express();
// let app = require('http').createServer();
// //HTTP将作为参数注入到socket.io(依赖注入)
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(express.json());
app.use(cookieParser());
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json(
    {
      message:err.message,
      error:err
    }
  )
});
let server = require('socket.io')(require('http').createServer());
//server.listen(5050)
module.exports = server;
