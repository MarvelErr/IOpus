/**
 * Created by luwenxull on 2015/4/28.
 */
app.directive('initUser',function($http){
    return function postLink(scope, iElement, iAttrs){
        $http.get('/getUsername').success(function(data){
            scope.username=data.username;
        })
    }
});