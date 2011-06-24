/**
 * @author Demetrius Johnson
 */

var express = require('express')
  , connect = require('connect')
  , homeC = require('home')
  , app = express.createServer()
  , io = require('socket.io').listen(app)
  , ioClient = require('chat-client');

app.configure(function() {
  app.set('view engine', 'jade');
  app.set('views', __dirname + '/views');
  app.set('partials', __dirname + '/views');

  app.get('/', homeC.Index);

  app.use(express.compiler({src: __dirname + '/../_www', enable: ['less'] }));
  app.use(app.router);
  app.use(express.static(__dirname + '/../_www'));

  io.configure(function () {
    io.set('transports', ['websocket']);
  });
  
  io.sockets.on('connection', ioClient(io));
});

module.exports = app;
