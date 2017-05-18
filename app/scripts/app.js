'use strict';
(function(){
  var app = angular.module('app', []);

  app.controller('appController', ['$scope',
    function($scope){
        $scope.title = 'Hello Angular';
    }]
  );
}());