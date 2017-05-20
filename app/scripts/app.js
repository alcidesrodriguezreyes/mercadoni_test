'use strict';
(function(){
  var app = angular.module('app', []);

  app.controller('appController', ['$scope', '$http',
    function($scope, $http){
        $scope.title = 'Hello Angular';
        $http({
          type: 'GET',
          url: '/file',
          headers: {
            "Accept": "application/json;charset=utf-8"
          }
        }).then(function(response){
          $scope.addressarray = response.data.trim().split('\n');
        });
    }]
  );
}());