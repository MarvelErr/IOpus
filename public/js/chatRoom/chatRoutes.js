/**
 * Created by luwenxu on 2015/3/3.
 */
app.config(function ($stateProvider) {
    $stateProvider.state('signIn', {
        templateUrl: '/chatRoom/signIn.html',
        url: '/login',
        controller: 'signInController'
    }).state('chat', {
        templateUrl: '/chatRoom/chat.html',
        url: '/chat/:name',
        resolve: {
            socket: function () {
                var socket = io.connect('http://luwenxull.vicp.cc:3000/default');
                return socket;
            },
            user:function($http){
                return $http({method: 'GET', url: '/getUsername'})
            }
        },
        controller:'chatController'
    })
});