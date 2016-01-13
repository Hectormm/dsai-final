'use strict';

class NavbarController {
  //start-non-standard
  menu = [{
    'title': 'Home',
    'link': '/'
  },
  {
    'title': 'Platos',
    'link': '/plato'
  },
  {
    'title': 'Ingredientes',
    'link': '/ingrediente'
  }];

  isCollapsed = true;
  //end-non-standard

  constructor($location) {
    this.$location = $location;
    }

  isActive(route) {
    return route === this.$location.path();
  }
}

angular.module('dsaiFinalApp')
  .controller('NavbarController', NavbarController);
