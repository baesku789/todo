const createError = require('http-errors');
const express = require('express');
const http = require('http');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const config = require('./config/config')

const app = express();

//proxy 설정
app.use(function (req, res, next){
  res.setHeader("Access-Control-Allow-Origin", config.SERVER_DOMAIN)
  next()
})
app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler


const port = 3000
const server = http.createServer(app)
server.listen(port)
