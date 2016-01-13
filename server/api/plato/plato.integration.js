'use strict';

var app = require('../..');
import request from 'supertest';

var newPlato;

describe('Plato API:', function() {

  describe('GET /api/platos', function() {
    var platos;

    beforeEach(function(done) {
      request(app)
        .get('/api/platos')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          platos = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      platos.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/platos', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/platos')
        .send({
          name: 'New Plato',
          info: 'This is the brand new plato!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newPlato = res.body;
          done();
        });
    });

    it('should respond with the newly created plato', function() {
      newPlato.name.should.equal('New Plato');
      newPlato.info.should.equal('This is the brand new plato!!!');
    });

  });

  describe('GET /api/platos/:id', function() {
    var plato;

    beforeEach(function(done) {
      request(app)
        .get('/api/platos/' + newPlato._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          plato = res.body;
          done();
        });
    });

    afterEach(function() {
      plato = {};
    });

    it('should respond with the requested plato', function() {
      plato.name.should.equal('New Plato');
      plato.info.should.equal('This is the brand new plato!!!');
    });

  });

  describe('PUT /api/platos/:id', function() {
    var updatedPlato;

    beforeEach(function(done) {
      request(app)
        .put('/api/platos/' + newPlato._id)
        .send({
          name: 'Updated Plato',
          info: 'This is the updated plato!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedPlato = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedPlato = {};
    });

    it('should respond with the updated plato', function() {
      updatedPlato.name.should.equal('Updated Plato');
      updatedPlato.info.should.equal('This is the updated plato!!!');
    });

  });

  describe('DELETE /api/platos/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/platos/' + newPlato._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when plato does not exist', function(done) {
      request(app)
        .delete('/api/platos/' + newPlato._id)
        .expect(404)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

  });

});
