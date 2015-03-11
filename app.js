
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes/index');
var http = require('http');
var path = require('path');
var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
/*app.set('views', path.join(__dirname, 'views'));*/
app.set('view engine', 'ejs');
//app.use
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));//设置静态文件目录

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

routes(app);
var server=http.createServer(app);
var io=require('socket.io')(server);
server.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

var messages=[],
    sockets=[];
io.on('connection', function (socket) {
  sockets.push(socket);
  socket.emit('allMessages',messages);
  socket.on('newMessage',function(message){
    messages.push(message);
    for(var i=0;i<sockets.length;i++){
      sockets[i].emit('messageAdded',messages);
    }
  })
});
