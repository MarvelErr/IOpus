/**
 * Created by luwenxu on 2015/3/27.
 */
app.controller('initialController',function($scope,$resource){
    $scope.register=function(){
        var user=$resource('register');
        user.save({},{
            name:'luwenxu',
            password:'111111'
        },function(res){
            console.log(res)
        })
    }
});