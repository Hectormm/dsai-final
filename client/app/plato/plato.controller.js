'use strict';

(function() {

class PlatoController {

  constructor($http) {
    this.$http = $http;
    this.platos = [];

    $http.get('/api/platos').then(response => {
      this.platos = response.data;
    });
  }

    addIngrediente() {
      if (this.newThing) {
        this.$http.post('/api/platos', { name: this.newThing });
        this.newThing = '';
      }
    }

    deleteIngrediente(thing) {
      this.$http.delete('/api/platos/' + thing._id);
    }
  }


angular.module('dsaiFinalApp')
  .controller('PlatoCtrl',PlatoController);

})();
