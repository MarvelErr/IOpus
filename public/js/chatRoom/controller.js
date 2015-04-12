/**
 * Created by luwenxu on 2015/3/27.
 */
app.controller('singInController',function($scope,$resource,$state){
    var erroru = $('erroru'), errorp = $('errorp'), submit = $('#submit'), udiv = $('#u'), pdiv = $('#p');
    $scope.username='222';
    $scope.signIn=function($event){
        var user=$resource('/register');

        var success=true;
        $event.preventDefault();
        if ($scope.username == '') {
            udiv.attr('errr', '');
            success=false;
        } else {
            udiv.removeAttr('errr');
        }
        if ($scope.password == '') {
            pdiv.attr('errr', '');
            success=false
        } else {
            pdiv.removeAttr('errr');
        }
        if(success){
            $state.go('chat');
            user.save({
                name:$scope.username,
                password:$scope.password
            },function(res){
                console.log(res)
            });
        }
    }
});