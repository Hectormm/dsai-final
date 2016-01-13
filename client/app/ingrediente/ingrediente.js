'use strict';

angular.module('dsaiFinalApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/ingrediente', {
        templateUrl: 'app/ingrediente/ingrediente.html',
        controller: 'IngredienteCtrl',
        controllerAs: 'ingrediente'
      });
  });
