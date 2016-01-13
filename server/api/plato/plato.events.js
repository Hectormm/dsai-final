/**
 * Plato model events
 */

'use strict';

import {EventEmitter} from 'events';
var Plato = require('./plato.model');
var PlatoEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
PlatoEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Plato.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    PlatoEvents.emit(event + ':' + doc._id, doc);
    PlatoEvents.emit(event, doc);
  }
}

export default PlatoEvents;
