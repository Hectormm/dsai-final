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

    recargarPlatos(){
      this.$http.get('/api/platos').then(response => {
          this.platos = response.data;
      });
    }

    limpiarDatos(){
      this.nombreCrear = '';
      this.descripcionCrear = '';
      this.caloriasCrear = '';
      this.precioCrear =  '';
      this.fotoCrear = '';
      this.platoAEditar = '';
    }

    crearPlato() {
        this.$http.post('/api/platos', {  nombre: this.nombreCrear,
                                          descripcion: this.descripcionCrear,
                                          calorias: this.caloriasCrear,
                                          precio: this.precioCrear,
                                          foto: this.fotoCrear});

        this.mostrarCrearPlato = false;
        this.limpiarDatos();
        this.recargarPlatos();
      }

      borrarPlato(_id){
        this.$http.delete('/api/platos/' + _id);
        this.recargarPlatos();

      }

      editarPlato(){
        this.$http.put('/api/platos/' +   this.platoAEditar , {
                                          nombre: this.nombreCrear,
                                          descripcion: this.descripcionCrear,
                                          calorias: this.caloriasCrear,
                                          precio: this.precioCrear,
                                          foto: this.fotoCrear});

        this.mostrarCrearPlato = false;
        this.limpiarDatos();
        this.recargarPlatos();

      }

      edicionPlato(plato){
        this.platoAEditar = plato._id;
        this.mostrarCrearPlato = true;
        this.editar = true;

        this.nombreCrear = plato.nombre;
        this.descripcionCrear = plato.descripcion;
        this.caloriasCrear = plato.calorias;
        this.precioCrear = plato.precio;
        this.fotoCrear = plato.foto;

      }



  }


angular.module('dsaiFinalApp')
  .controller('PlatoCtrl',PlatoController);

})();
