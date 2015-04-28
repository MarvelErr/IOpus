/**
 * Created by luwenxull on 2015/3/2.
 */
app.factory('socket',function(){
    var socket = io.connect('http://luwenxull.vicp.cc:3000');
    return socket;
});