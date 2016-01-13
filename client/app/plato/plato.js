'use strict';

angular.module('dsaiFinalApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/plato', {
        templateUrl: 'app/plato/plato.html',
        controller: 'PlatoCtrl',
        controllerAs: 'plato'
      });
  });
