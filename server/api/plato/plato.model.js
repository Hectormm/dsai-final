'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));


var Ingrediente = require('../ingrediente/ingrediente.model.js');

var PlatoSchema = new mongoose.Schema({
  nombre: String,
  descripcion: String,
  calorias: Number,
  precio: Number,
  foto: String,
  ingrediente:[{
    type:mongoose.Schema.ObjectId,
    ref: 'Ingrediente'
  }]
});

export default mongoose.model('Plato', PlatoSchema);
