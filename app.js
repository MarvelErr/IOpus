
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes/index');

var http = require('http');
var path = require('path');
var app = express();
/*mongodb,mongoose*/
var mongoose=require('mongoose'),url='mongodb://localhost/test';
mongoose.connect(url);
var db= mongoose.connection;
db.on('error',console.error.bind(console,'connection error:'));
db.once('open',function(){
  console.log('the mongodb is now opened')
});
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
app.use(express.cookieParser());
app.use(express.session({
  secret:'chatRoom',
  cookie:{path: '/', httpOnly: true, maxAge: 1000*30*24*60*60 }//30days
}));
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'views')));
app.use(function(req,res,next){
  console.log('Time: %d', Date.now());
  next();
});

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

routes(app,db,mongoose);
var server=http.createServer(app);
var io=require('socket.io')(server);
server.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

//var messages=[];
    //sockets=[];
var defaultRoom=io.of('/default'),messagesOfDefaultRoom=[];
defaultRoom.on('connection', function (socket) {
  //sockets.push(socket);
  //socket.emit('allMessages',messagesOfDefaultRoom);
  defaultRoom.emit('allMessages',messagesOfDefaultRoom);
  socket.on('newMessage',function(message){
    messagesOfDefaultRoom.push(message);
    defaultRoom.emit('messageAdded',messagesOfDefaultRoom)
  });
  socket.on('disconnect',function(){
    console.log('disconnect')
  })
});
