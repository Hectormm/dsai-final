'use strict';

angular.module('dsaiFinalApp')
  .filter('nombreIngredientes', function () {
    return function (input) {
      return 'nombreIngredientes filter: ' + input;
    };
  });
