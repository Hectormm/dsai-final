'use strict';

(function() {

class PlatoController {

    constructor($http) {
      this.$http = $http;
      this.platos = [];
      this.Ingrediente = [];

      $http.get('/api/platos').then(response => {
        this.platos = response.data;
        $http.get('/api/ingredientes').then(response => {
          this.ingredientes = response.data;
        });
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
      this.ingredientesCrear = null;
      this.nombres = '';

    }

    crearPlato() {
        console.log(this.ingredientesCrear);

        this.$http.post('/api/platos', {  nombre: this.nombreCrear,
                                          descripcion: this.descripcionCrear,
                                          calorias: this.caloriasCrear,
                                          precio: this.precioCrear,
                                          foto: this.fotoCrear,
                                          ingrediente: this.ingredientesCrear});

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
                                          foto: this.fotoCrear,
                                          ingrediente: null}).then(response =>{
                                          this.$http.put('/api/platos/' +   this.platoAEditar , {
                                                                              nombre: this.nombreCrear,
                                                                              descripcion: this.descripcionCrear,
                                                                              calorias: this.caloriasCrear,
                                                                              precio: this.precioCrear,
                                                                              foto: this.fotoCrear,
                                                                              ingrediente: this.ingredientesCrear });
                                                                            }).then(response =>{
                                                                              this.mostrarCrearPlato = false;
                                                                              this.limpiarDatos();
                                                                              this.recargarPlatos();
                                                                            });


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

      dameNombresIngredientes(_ids){
        this.nombres = '';
        if(this.ingredientes){
          for(var i=0; i<this.ingredientes.length;i++){
            for(var j=0; j<_ids.length; j++){
              if(_ids[j] === this.ingredientes[i]._id){
                this.nombres =  this.nombres + ' ' + this.ingredientes[i].nombre;
              }
            }
          }

        }

        return this.nombres;

      }


  }


angular.module('dsaiFinalApp')
  .controller('PlatoCtrl',PlatoController);

})();
