var app = angular.module("myApp",["ngRoute"]);
app.config(function($routeProvider){
    $routeProvider
    .when('/dashBoard',{
        templateUrl: 'dashBoard.html'
    })
})

app.controller("myCtrl",function ($scope,$http) {

    $scope.login=function () {

        var jsonData = {
            user: $scope.user,
            password: $scope.pass
        };
        var serializeData = $.param(jsonData);
        $http({
            method:'POST',
            url: '/login',
            data: serializeData,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then(function(res){
            alert(res.data);
        },function (err) {
          alert("wrong user name password");
        })
    }
})