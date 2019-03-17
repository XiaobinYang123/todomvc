(function(angular) {
  'use strict';


  var app = angular.module('app', ['app.controllers', 'app.services', 'ngRoute']);

  app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/:status?', {
        templateUrl: 'main_tmpl',
        controller: 'MainController'
      });
  }]);

})(angular);
