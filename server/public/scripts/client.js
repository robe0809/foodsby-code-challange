const myApp = angular.module('myApp', ['ngMaterial']);

myApp.controller("DeliveryController", ['$http', function ($http) {
    console.log('controller loaded');
    
    let self = this;

    self.getDeliveries = function () {
        $http.get('/delivery')
        .then((response) => {
            console.log('get response', response.data);
        })
        .catch((error) => {
            console.log('error on get', error);
        })
    }
    self.getDeliveries();

}]);