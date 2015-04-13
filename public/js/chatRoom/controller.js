/**
 * Created by luwenxu on 2015/3/27.
 */
app.controller('singInController',function($scope,$resource,$state){
    var erroru = $('erroru'), errorp = $('errorp'), submit = $('#submit'), udiv = $('#u'), pdiv = $('#p');
    $scope.signUp=function($event){
        var user=$resource('/signUp');
        var success=true;
        $event.preventDefault();
        if (!$scope.username) {
            udiv.attr('errr', '');
            success=false;
        } else {
            udiv.removeAttr('errr');
        }
        if (!$scope.password) {
            pdiv.attr('errr', '');
            success=false
        } else {
            pdiv.removeAttr('errr');
        }
        if(success){
            user.save({
                name:$scope.username,
                password:$scope.password
            },function(res){
                if(res.status=='success'){
                    $state.go('chat');
                }else{
                    swal("Something Wrong!", "用户名已存在!", "error");
                }
            });
        }
    }
});