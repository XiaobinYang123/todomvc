

(function(angular) {
  'use strict';

  var services = angular.module('app.services', []);

  services.service('MainService', ['$window', function($window) {
    var storage = $window.localStorage;

    var todos = storage['todo_list'] ? JSON.parse(storage['todo_list']) : [];

    function save() {
      storage['todo_list'] = JSON.stringify(todos);
    }

    function getId() {
      var id = Math.random(); // 1 2
      if (todos) {
        for (var i = 0; i < todos.length; i++) {
          if (todos[i].id === id) {
            id = getId();
            break;
          }
        }
      }
      return id;
    }

    this.getTodos = function() {
      return todos;
    };

    this.add = function(text) {
      todos.push({

        id: getId(),

        text: text,
        completed: false
      });
      save();
    };

    this.remove = function(id) {
      for (var i = 0; i < todos.length; i++) {
        if (todos[i].id === id) {
          todos.splice(i, 1);
          break;
        }
      }
      save();
    };

    this.clear = function() {
      var result = [];
      for (var i = 0; i < todos.length; i++) {
        if (!todos[i].completed) {
          result.push(todos[i]);
        }
      }
      todos = result;
      save();
      return todos;
    };

    this.existCompleted = function() {

      for (var i = 0; i < todos.length; i++) {
        if (todos[i].completed) {
          return true;
        }
      }
      return false;
    };

    this.toggle = save;

    var now = true;
    this.toggleAll = function() {
      for (var i = 0; i < todos.length; i++) {
        todos[i].completed = now;
      }
      now = !now;
      save();
    }

  }]);

})(angular);
