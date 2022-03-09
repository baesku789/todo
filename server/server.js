const express = require('express');
const http = require('http');

const indexRouter = require('./routes/index');
const todosRouter = require('./routes/todo')
const config = require('./config/config')

const app = express();

//proxy 설정
app.use(function (req, res, next){
  res.setHeader("Access-Control-Allow-Origin", config.CLIENT_DOMAIN)
  next()
})
app.use('/', indexRouter);
app.use('/todos', todosRouter);

// catch 404 and forward to error handler
app.use(function(req, res) {
  res.status(404).send('Sorry cannot find that')
});

// error handler
const port = 3000
const server = http.createServer(app)
server.listen(port)
