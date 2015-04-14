/**
 * Created by luwenxu on 2015/3/3.
 */
app.config(function ($stateProvider) {
    $stateProvider.state('login', {
        templateUrl: '/chatRoom/login.html',
        url: '/login',
        controller: function ($scope, $state) {
            $scope.confirm = function ($event) {
                if ($event.keyCode == 13) {
                    window.localStorage.IOpusUser = ($scope.nickname != null && $scope.nickname != '') ? $scope.nickname : null;
                    $state.go('chat');
                }
            };
        }
    }).state('chat', {
        templateUrl: '/chatRoom/chat.html',
        url: '/chat/:name',
        resolve: {
            socket: function () {
                var socket = io.connect('http://luwenxull.vicp.cc:3000/default');
                return socket;
            }
        },
        controller: function ($scope, socket, $state, $stateParams,$rootScope) {
            /*$rootScope.$on('$stateChangeStart',function(event,toState, toParams, fromState, fromParams){
                //console.log('change');
                console.log(toState);
                console.log(toParams);
                console.log(fromState);
                console.log(fromParams);
                event.preventDefault();
            });*/
            $scope.speaker = $state.params.name;
            //console.log($state.current);
            $scope.messages = [];
            socket.on('messageAdded', function (msgs) {
                $scope.$apply(
                    function () {
                        $scope.messages = msgs;
                    }
                )
            });
            socket.on('allMessages', function (msgs) {
                $scope.$apply(
                    function () {
                        $scope.messages = msgs;
                    }
                )
            });
            $scope.send = function () {
                if ($scope.msg) {
                    socket.emit('newMessage', {
                        name: $scope.speaker,
                        msg: $scope.msg
                    });
                    $scope.msg = null;
                }
            }
        }
    })
});