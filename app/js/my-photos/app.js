'use strict';

var myPhotosApp = angular.module('myPhotosApp', [
    'ngRoute',
    'myPhotosControllers'
    ]);

myPhotosApp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
            when('/device', {
                templateUrl: 'partials/my-photos/device.html',
                controller: 'deviceCtrl'
            }).
            otherwise({
                redirectTo: '/device'
            });
    }]);