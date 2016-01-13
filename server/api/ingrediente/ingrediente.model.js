'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var IngredienteSchema = new mongoose.Schema({
  nombre: String,
  descripcion: String,
  calorias: Number
});

export default mongoose.model('Ingrediente', IngredienteSchema);
