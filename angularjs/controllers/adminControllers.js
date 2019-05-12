angular.module("sportsStoreAdmin")
.constant("authUrl", "http://localhost:5500/users/login")
.constant("ordersUrl", "http://localhost:5500/orders")
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
.controller("mainCtrl", function($scope){
    
    $scope.screens = ["Products", "Orders"];
    $scope.current = $scope.screens[0];
    
    $scope.setScreen = function(index){
        $scope.current = $scope.screens[index];
    };
    
    $scope.getScreen = function(){
        return $scope.current == "Products" ? 
        "angularjs/views/adminProducts.html" : "angularjs/views/adminOrders.html";
    };
    
})
.controller("ordersCtrl", function($scope, $http, ordersUrl){

    $http({
        method: 'GET',
        url: ordersUrl,
        withCredentials: true
    })
    .then(response => {     // success
        $scope.orders = response.data;
    })
    .catch(error => {       // failed
        $scope.error = error;
    });

    $scope.selectedOrder;

    $scope.selectOrder = function(order){
        $scope.selectedOrder = order;
    }

    $scope.calcTotal  = function(order){
        var total = 0;
        for(let i=0; i < order.products.length; i++){
            total += order.products[i].count * order.products[i].price; 
        }
        return total;
    }

})