/**
 * Created by luwenxu on 2015/3/27.
 */
app.controller('signInController', function ($scope, $resource, $state) {
    var erroru = $('erroru'), errorp = $('errorp'), submit = $('#submit'), udiv = $('#u'), pdiv = $('#p');
    $scope.resolveSignIn=function(){
        var signIn = $resource('/signIn');
        signIn.save({
            name: $scope.username,
            password: $scope.password
        }, function (results) {
            if (results.status == 'success') {
                $state.go('chat', {name: $scope.username});
            } else {
                swal("Something Wrong!", "密码错误!", "error");
            }
        });
    };
    $scope.signIn = function ($event) {
        //var signIn = $resource('/signIn');
        var success = true;
        $event.preventDefault();
        if (!$scope.username) {
            udiv.attr('errr', '');
            success = false;
        } else {
            udiv.removeAttr('errr');
        }
        if (!$scope.password) {
            pdiv.attr('errr', '');
            success = false
        } else {
            pdiv.removeAttr('errr');
        }
        if (success) {
            $scope.resolveSignIn();
        }
    };
    $scope.signUp = function ($event) {
        var signUp = $resource('/signUp');
        var success = true;
        $event.preventDefault();
        if (!$scope.username) {
            udiv.attr('errr', '');
            success = false;
        } else {
            udiv.removeAttr('errr');
        }
        if (!$scope.password) {
            pdiv.attr('errr', '');
            success = false
        } else {
            pdiv.removeAttr('errr');
        }
        if (success) {
            signUp.save({
                name: $scope.username,
                password: $scope.password
            }, function (res) {
                if (res.status == 'success') {
                    $scope.signIn($event);
                } else {
                    swal("Something Wrong!", "用户名已存在!", "error");
                }
            });
        }
    }
}).controller('chatController',function ($scope, socket, $state,user,$resource) {
    $scope.user = user.data.username
    if($scope.user){
    }else{
        alert('不要调皮');
        /*$scope.exit();
        $state.go('signIn');*/
    }
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
                name: $scope.user,
                msg: $scope.msg
            });
            $scope.msg = null;
        }
    };
    $scope.exit=function(){
        var userExit=$resource('/userExit');
        var some=userExit.delete({username:$scope.user},function(data){
            if(data.status=='success'){
                $scope.user=null;
                $state.go('signIn');
            }
        })
    }
});