/**
 * Created by luwenxull on 2015/3/2.
 */
app.factory('socket',function(){
    var socket = io.connect('10.10.17.56:3000');
    return socket;
});