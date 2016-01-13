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

  recargarIngredientes(){
    this.$http.get('/api/ingredientes').then(response => {
        this.ingredientes = response.data;
    });
  }

  limpiarDatos(){
    this.nombreCrear = null;
    this.descripcionCrear = '';
    this.caloriasCrear = '';
    this.ingredienteAEditar = '';

  }

  crearIngrediente() {
      this.$http.post('/api/ingredientes', {  nombre: this.nombreCrear,
                                        descripcion: this.descripcionCrear,
                                        calorias: this.caloriasCrear,
                                        precio: this.precioCrear,
                                        foto: this.precioCrear});



      this.mostrarCrearIngrediente = false;
      this.limpiarDatos();
      this.recargarIngredientes();
    }

    borrarIngrediente(_id){
      this.$http.delete('/api/ingredientes/' + _id);
      this.recargarIngredientes();
    }

    editarIngrediente(){
      this.$http.put('/api/ingredientes/' +   this.ingredienteAEditar , {
                                        nombre: this.nombreCrear,
                                        descripcion: this.descripcionCrear,
                                        calorias: this.caloriasCrear
                                      });

      this.mostrarCrearIngrediente = false;
      this.limpiarDatos();
      this.recargarIngredientes();
    }

    edicionIngrediente(ingrediente){
      this.ingredienteAEditar = ingrediente._id;
      this.mostrarCrearIngrediente = true;
      this.editar = true;

      this.nombreCrear = ingrediente.nombre;
      this.descripcionCrear = ingrediente.descripcion;
      this.caloriasCrear = ingrediente.calorias;

    }

  }


angular.module('dsaiFinalApp')
  .controller('IngredienteCtrl',IngredienteController);

})();
