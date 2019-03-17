

(function(angular) {
  'use strict';

  var controllers = angular.module('app.controllers', ['ngRoute']);



  controllers.controller('MainController', ['$scope', '$location', 'MainService', '$routeParams', function($scope, $location, MainService, $routeParams) {




    $scope.text = '';


    $scope.todos = MainService.getTodos();

    $scope.add = function() {
      if (!$scope.text) {
        return;
      }
      MainService.add($scope.text);

      $scope.text = '';
    };



    $scope.remove = MainService.remove;

    $scope.clear = function() {
      $scope.todos = MainService.clear();
    };

 
    $scope.existCompleted = MainService.existCompleted;

    $scope.currentEditingId = -1;
    $scope.editing = function(id) {
      $scope.currentEditingId = id;
    };
    $scope.save = function() {
      $scope.currentEditingId = -1;
    };

    $scope.toggle = MainService.toggle;

    $scope.toggleAll = MainService.toggleAll;

    switch ($routeParams.status) {
      case 'active':
        $scope.filter = { completed: false };
        break;
      case 'completed':
        $scope.filter = { completed: true };
        break;
      default:
        $scope.filter = {};
        break;
    }

    $scope.equalCompare = function(source, target) {
      return angular.equals(source, target);
    };

  }]);
})(angular);
