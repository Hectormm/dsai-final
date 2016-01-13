'use strict';

(function() {

class IngredienteController {

  constructor($http) {
    this.$http = $http;
    this.ingredientes = [];

    $http.get('/api/ingredientes').then(response => {
      this.ingredientes = response.data;
    });
  }

    addIngrediente() {
      if (this.newThing) {
        this.$http.post('/api/ingredientes', { name: this.newThing });
        this.newThing = '';
      }
    }

    deleteIngrediente(thing) {
      this.$http.delete('/api/ingredientes/' + thing._id);
    }
  }


angular.module('dsaiFinalApp')
  .controller('IngredienteCtrl',IngredienteController);

})();
