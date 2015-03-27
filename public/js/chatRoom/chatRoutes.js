/**
 * Created by luwenxu on 2015/3/3.
 */
app.config(function($stateProvider){
    $stateProvider.state('login',{
        templateUrl:'/chatRoom/login.html',
        url:'/login',
        controller:function($scope,$state){
            $scope.confirm=function($event){
                if($event.keyCode==13){
                    window.localStorage.IOpusUser=($scope.nickname!=null&&$scope.nickname!='')?$scope.nickname:null;
                    $state.go('chat');
                }
            };
        }
    }).state('chat',{
        templateUrl:'/chatRoom/chat.html',
        url:'/chat',
        controller:function($scope,socket,$state){
            if(!window.localStorage.IOpusUser){
                $state.go('login');
            }else{
                $scope.messages=[];
                socket.on('messageAdded',function(msgs){
                    $scope.$apply(
                        function(){
                            $scope.messages=msgs;
                        }
                    )
                });
                socket.on('allMessages',function(msgs){
                    $scope.$apply(
                        function(){
                            $scope.messages=msgs;
                        }
                    )
                });
                $scope.send=function(){
                    if($scope.msg){
                        socket.emit('newMessage',{
                            name:window.localStorage.IOpusUser,
                            msg:$scope.msg
                        });
                        $scope.msg=null;
                    }
                }
            }
        }
    })
});