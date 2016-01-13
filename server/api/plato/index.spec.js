'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var platoCtrlStub = {
  index: 'platoCtrl.index',
  show: 'platoCtrl.show',
  create: 'platoCtrl.create',
  update: 'platoCtrl.update',
  destroy: 'platoCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var platoIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './plato.controller': platoCtrlStub
});

describe('Plato API Router:', function() {

  it('should return an express router instance', function() {
    platoIndex.should.equal(routerStub);
  });

  describe('GET /api/platos', function() {

    it('should route to plato.controller.index', function() {
      routerStub.get
        .withArgs('/', 'platoCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/platos/:id', function() {

    it('should route to plato.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'platoCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/platos', function() {

    it('should route to plato.controller.create', function() {
      routerStub.post
        .withArgs('/', 'platoCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/platos/:id', function() {

    it('should route to plato.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'platoCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/platos/:id', function() {

    it('should route to plato.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'platoCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/platos/:id', function() {

    it('should route to plato.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'platoCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
