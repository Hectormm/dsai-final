'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var ingredienteCtrlStub = {
  index: 'ingredienteCtrl.index',
  show: 'ingredienteCtrl.show',
  create: 'ingredienteCtrl.create',
  update: 'ingredienteCtrl.update',
  destroy: 'ingredienteCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var ingredienteIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './ingrediente.controller': ingredienteCtrlStub
});

describe('Ingrediente API Router:', function() {

  it('should return an express router instance', function() {
    ingredienteIndex.should.equal(routerStub);
  });

  describe('GET /api/ingredientes', function() {

    it('should route to ingrediente.controller.index', function() {
      routerStub.get
        .withArgs('/', 'ingredienteCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/ingredientes/:id', function() {

    it('should route to ingrediente.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'ingredienteCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/ingredientes', function() {

    it('should route to ingrediente.controller.create', function() {
      routerStub.post
        .withArgs('/', 'ingredienteCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/ingredientes/:id', function() {

    it('should route to ingrediente.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'ingredienteCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/ingredientes/:id', function() {

    it('should route to ingrediente.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'ingredienteCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/ingredientes/:id', function() {

    it('should route to ingrediente.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'ingredienteCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
