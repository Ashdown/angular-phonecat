'use strict';

var myPhotosApp = angular.module('myPhotosApp', [
    'ngRoute',
    'myPhotosControllers'
    ]);

myPhotosApp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
            when('/scan', {
                templateUrl: 'partials/my-photos/scan.html',
                controller: 'scanCtrl'
            }).
            when('/device-list', {
                templateUrl: 'partials/my-photos/device-list.html',
                controller: 'deviceListCtrl'
            }).
            when('/device/:deviceId', {
                templateUrl: 'partials/my-photos/device.html',
                controller: 'deviceCtrl'
            }).
            otherwise({
                redirectTo: '/scan'
            });
    }]);