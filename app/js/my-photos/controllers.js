'use strict';

var myPhotosControllers = angular.module('myPhotosControllers', []);

myPhotosControllers.controller('scanCtrl', ['$location', '$http',
    function($location, $http){

        $http({
            method: 'GET',
            url: 'mocks/devices.json'
        }).then(function(){
            $location.path('device-list');
        }, function(){
//            $location.path('error');
        })
    }]);


myPhotosControllers.controller('deviceListCtrl', ['$scope',
    function($scope){

    }]);


myPhotosControllers.controller('deviceCtrl', ['$scope',
    function($scope){

    }]);