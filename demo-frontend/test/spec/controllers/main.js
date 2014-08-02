'use strict';

/*
 | -- DEMONSTRATION OF UNIT TESTING IN ANGULAR
 |   I usually don't test controller logic becasue I feel
 |   that anything complex enough that should require testing
 |   doesn't belong in the controller; however, testing controllers
 |   scopes does lend itself nicely to BDD'ing any services
 |   that the controllers depend on, in this case, `productService`.
 |   
 |   This is just an example of how one might go about setting
 |   up a unit test with angular and mocks.
 */
describe('Controller: mainController', function() {
  beforeEach(function() {
    module('TruecoinDemoAppTest.controllers');
  });

  var mainController
    , scope
    , productService
    ;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller, $rootScope, _productService_) {
    productService = _productService_;
    scope = $rootScope.$new();
    mainController = $controller('mainController', {
      $scope: scope,
//      productService: _productService_
    });
  }));

  it('should attach products to the scope', function() {
    scope.products.should.eql(productService.private.products);
  });
});


describe('ProductService', function() {
  beforeEach(function() {
    module('TruecoinDemoAppTest.services')
  });

  var productService
    ;

  beforeEach(inject(function(_productService_) {
    productService = _productService_;
  }));

  it('should expose #getList()', function() {
    productService.getList.should.be.a.Function
  });

  describe('#getList()', function() {
    it('should return a promise with a #success() and #error()', function() {
      var promise = productService.getList();
      promise.success.should.be.a.Function;
    });
  });
})
