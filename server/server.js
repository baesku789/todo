const createError = require('http-errors');
const express = require('express');
const http = require('http');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

//proxy 설정
app.use(function (req, res, next){
  res.setHeader("Access-Control-Allow-Origin", 'http://localhost:9000')
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
