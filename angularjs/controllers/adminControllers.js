angular.module("sportsStoreAdmin")
.constant("authUrl", "http://localhost:5500/users/login")
.controller("authCtrl", function($scope, $http, $location, authUrl){
    $scope.authenticate = function(user, pass){
        $http({
            url: authUrl,
            method: "POST",
            data: {
                username: user,
                password: pass
            },
            withCredentials: true
        })
        .then(function() {  // success
            $location.path("/main");
        })
        .catch(function(error) {  // failed
            $scope.authenticationError = error;
        })
    }
})