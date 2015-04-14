/**
 * Created by luwenxu on 2015/3/27.
 */
app.controller('singInController',function($scope,$resource,$state){
    var erroru = $('erroru'), errorp = $('errorp'), submit = $('#submit'), udiv = $('#u'), pdiv = $('#p');
    $scope.signIn=function($event){
        var signIn=$resource('/signIn');
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
            signIn.save({
                name:$scope.username,
                password:$scope.password
            },function(res){
                if(res.status=='success'){
                    $state.go('chat',{name:$scope.username});
                }else{
                    swal("Something Wrong!", "暂时还不晓得哦!", "error");
                }
            });
        }
    };
    $scope.signUp=function($event){
        var signUp=$resource('/signUp'),signIn=$resource('/signIn');
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
            signUp.save({
                name:$scope.username,
                password:$scope.password
            },function(res){
                if(res.status=='success'){
                    signIn.save({
                       name:$scope.username
                    });
                    $state.go('chat',{name:$scope.username});
                }else{
                    swal("Something Wrong!", "用户名已存在!", "error");
                }
            });
        }
    }
});