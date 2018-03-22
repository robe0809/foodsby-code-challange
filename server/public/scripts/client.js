var myApp = angular.module('myApp', ['ngRoute', 'ngMaterial']);

// app configuration
myApp.config(function($routeProvider) {
    console.log('config loaded');
    // define our client side routes
    $routeProvider
        .when('', {
            templateUrl: '/views/.html',
            controller: 'Controller as vm'
        })
        .when('', {
            templateUrl: '/views/.html',
            controller: 'Controller as vm'
        })
        .otherwise(
            { redirectTo: '' }
        );
});