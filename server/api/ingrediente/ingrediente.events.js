/**
 * Ingrediente model events
 */

'use strict';

import {EventEmitter} from 'events';
var Ingrediente = require('./ingrediente.model');
var IngredienteEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
IngredienteEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Ingrediente.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    IngredienteEvents.emit(event + ':' + doc._id, doc);
    IngredienteEvents.emit(event, doc);
  }
}

export default IngredienteEvents;
