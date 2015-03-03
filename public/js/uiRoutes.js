/**
 * Created by luwenxu on 2015/3/3.
 */
app.config(function($stateProvider){
    $stateProvider.state('login',{
        templateUrl:'/chatRoom/login.html',
        url:'/login'
    }).state('chat',{
        templateUrl:'/charRoom/chat.html',
        url:'chat'
    })
});