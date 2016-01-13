'use strict';

var app = require('../..');
import request from 'supertest';

var newIngrediente;

describe('Ingrediente API:', function() {

  describe('GET /api/ingredientes', function() {
    var ingredientes;

    beforeEach(function(done) {
      request(app)
        .get('/api/ingredientes')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          ingredientes = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      ingredientes.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/ingredientes', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/ingredientes')
        .send({
          name: 'New Ingrediente',
          info: 'This is the brand new ingrediente!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newIngrediente = res.body;
          done();
        });
    });

    it('should respond with the newly created ingrediente', function() {
      newIngrediente.name.should.equal('New Ingrediente');
      newIngrediente.info.should.equal('This is the brand new ingrediente!!!');
    });

  });

  describe('GET /api/ingredientes/:id', function() {
    var ingrediente;

    beforeEach(function(done) {
      request(app)
        .get('/api/ingredientes/' + newIngrediente._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          ingrediente = res.body;
          done();
        });
    });

    afterEach(function() {
      ingrediente = {};
    });

    it('should respond with the requested ingrediente', function() {
      ingrediente.name.should.equal('New Ingrediente');
      ingrediente.info.should.equal('This is the brand new ingrediente!!!');
    });

  });

  describe('PUT /api/ingredientes/:id', function() {
    var updatedIngrediente;

    beforeEach(function(done) {
      request(app)
        .put('/api/ingredientes/' + newIngrediente._id)
        .send({
          name: 'Updated Ingrediente',
          info: 'This is the updated ingrediente!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedIngrediente = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedIngrediente = {};
    });

    it('should respond with the updated ingrediente', function() {
      updatedIngrediente.name.should.equal('Updated Ingrediente');
      updatedIngrediente.info.should.equal('This is the updated ingrediente!!!');
    });

  });

  describe('DELETE /api/ingredientes/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/ingredientes/' + newIngrediente._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when ingrediente does not exist', function(done) {
      request(app)
        .delete('/api/ingredientes/' + newIngrediente._id)
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
